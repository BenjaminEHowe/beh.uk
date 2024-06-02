export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Invalid request method", { status: 405 });
  }

  const url = new URL(context.request.url)
  const formData = await context.request.formData();
  const body = Object.fromEntries(formData.entries());
  body.cf = context.request.cf;
  body.headers = Object.fromEntries(context.request.headers.entries());

  const sent = await sendFormViaResend(body, context.env.EMAIL_BEN, context.env.RESEND_KEY);

  if (!sent) {
    return new Response("Oops! Something went wrong. Please try submitting the form again.", { status: 500 });
  }

  return Response.redirect(`https://${url.hostname}/contact-success`, 303);
}


function bodyToText(body) {
  return `Email from ${body.email}

"name" (honeypot, should be blank): ${body.name}

Message:
${body.message}

headers:
${prettyJson(body.headers)}

cf:
${prettyJson(body.cf)}`
}

async function sendFormViaResend(body, email, api_key) {
  const response = await fetch(new Request("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${api_key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: "no-reply@viaresend.beh.uk",
      to: email,
      subject: "New contact form submission from beh.uk",
      text: bodyToText(body),
    }),
  }));
  return response.ok
}

function prettyJson(json) {
  return JSON.stringify(json, null, 2);
}
