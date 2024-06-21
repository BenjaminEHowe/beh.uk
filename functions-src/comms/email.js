import { USER_AGENT } from "../util.js";

function formToText(form) {
  var text = "";
  for (const property in form) {
    text += `${property}:\n`;
    var value = form[property];
    if (typeof value !== "string") {
      value = prettyJson(value);
    }
    text += `${value}\n\n`;
  }
  return text;
}

async function sendFormViaEmail({env, to, subject, form}) {
  if (to === undefined) {
    to = env.EMAIL_BEN;
  }
  return await sendFormViaResend(env.RESEND_KEY, to, subject, form);
}

async function sendFormViaResend(api_key, to, subject, form) {
  const headers = {}
  if (FORM_EMAIL_KEY in form) {
    headers["Reply-To"] = form[FORM_EMAIL_KEY]
  }
  const response = await fetch(new Request("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${api_key}`,
      "content-type": "application/json",
      "user-agent": USER_AGENT,
    },
    body: JSON.stringify({
      from: "no-reply@viaresend.beh.uk",
      to,
      subject,
      text: formToText(form),
      headers,
    }),
  }));
  return response.ok;
}

function prettyJson(json) {
  return JSON.stringify(json, null, 2);
}

const FORM_EMAIL_KEY = "email";

export { sendFormViaEmail }
