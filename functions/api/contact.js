export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Invalid request method", { status: 405 });
  }

  const url = new URL(context.request.url)
  const form = Object.fromEntries((await context.request.formData()).entries());
  form.cf = context.request.cf;
  form.headers = Object.fromEntries(context.request.headers.entries());

  const sent = await sendFormViaResend(context.env.RESEND_KEY, context.env.EMAIL_BEN, "New contact form submission from beh.uk", form);

  if (!sent) {
    return new Response("Oops! Something went wrong. Please try submitting the form again.", { status: 500 });
  }

  return Response.redirect(`https://${url.hostname}/contact-success`, 303);
}


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
