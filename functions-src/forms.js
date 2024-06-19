import { sendFormViaEmail } from "./comms/email.js"
import { ulidFactory } from "./ulid.ts"

const ulid = ulidFactory({ monotonic: true });

async function handleForm({
  context,
  formId,
  honeypotField,
}) {
  const submissionId = ulid();
  const submittedTs = new Date().toISOString();
  const fields = Object.fromEntries((await context.request.formData()).entries());
  const replyEmail = fields.email;
  const spamReasons = [];
  const cf = context.request.cf;
  const headers = Object.fromEntries(context.request.headers.entries());

  if (typeof honeypotField === "string") {
    if (fields[honeypotField] !== "") {
      spamReasons.push("HONEYPOT");
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
    return await sendFormViaEmail({
      env: context.env,
      subject: `New ${formId} form submission from beh.uk`,
      form,
    })
  } else {
    // submission is belived to be spam, return OK and don't do anything else
    return true;
  }
}

export { handleForm }
