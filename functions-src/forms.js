import { sendFormViaEmail } from "./comms/email.js";
import { sendFormViaPush } from "./comms/push.js";
import { verifySecureToken } from "./secure-token.js";
import { ulidFactory } from "./ulid.ts";

const ulid = ulidFactory({ monotonic: true });

async function handleForm({
  context,
  formId,
  honeypotField,
}) {
  const headers = Object.fromEntries(context.request.headers.entries());
  const usingJson = (headers["content-type"] === "application/json");
  const submissionId = ulid();
  const submittedTs = new Date().toISOString();
  const fields = usingJson ?
    await context.request.json() :
    Object.fromEntries((await context.request.formData()).entries());
  const replyEmail = fields.email;
  const spamReasons = [];
  const cf = context.request.cf;

  if (URGENT_TOKEN_FIELD_NAME in fields) {
    if (await verifySecureToken({
      token: fields[URGENT_TOKEN_FIELD_NAME],
      secret: context.env.TOKEN_GENERATOR_SECRET,
    }) === false) {
      spamReasons.push("BAD_TOKEN");
    }
  }

  if (typeof honeypotField === "string") {
    if (fields[honeypotField] !== "") {
      spamReasons.push("HONEYPOT");
    } else {
      delete fields[honeypotField];
    }
  }

  await context.env.DB_FORMS.prepare("INSERT INTO submissions (submission_id, form_id, submitted_ts, reply_email, fields, spam_reasons, cf, headers) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
    .bind(
      submissionId,
      formId,
      submittedTs,
      replyEmail,
      JSON.stringify(fields),
      JSON.stringify(spamReasons),
      JSON.stringify(cf),
      JSON.stringify(headers))
    .run();

  if (spamReasons.length === 0) {
    const emailResult = await sendFormViaEmail({
      env: context.env,
      subject: `New ${formId} form submission from beh.uk`,
      form: fields,
    });
    if (URGENT_TOKEN_FIELD_NAME in fields) {
      return await sendFormViaPush({
        env: context.env,
        form: fields,
      });
    }
    return emailResult;
  } else {
    // submission is belived to be spam, return OK and don't do anything else
    return true;
  }
}

const URGENT_TOKEN_FIELD_NAME = "token";

export { handleForm }
