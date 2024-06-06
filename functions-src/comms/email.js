function formToText(form) {
  var text = "";
  for (const property in form) {
    text += `${property}:\n`;
    var value = form[property];
    if (typeof value !== "string") {
      value = prettyJson(value)
    }
    text += `${value}\n\n`;
  }
  return text
}

async function sendFormViaEmail({env, to, subject, form}) {
  if (to === undefined) {
    to = env.EMAIL_BEN
  }
  return await sendFormViaResend(env.RESEND_KEY, to, subject, form)
}

async function sendFormViaResend(api_key, to, subject, form) {
  const response = await fetch(new Request("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${api_key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: "no-reply@viaresend.beh.uk",
      to,
      subject,
      text: formToText(form),
    }),
  }));
  return response.ok
}

function prettyJson(json) {
  return JSON.stringify(json, null, 2);
}

export { sendFormViaEmail }
