import { sendFormViaEmail } from "../../functions-src/comms/email.js"

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Invalid request method", { status: 405 });
  }

  const url = new URL(context.request.url)
  const form = Object.fromEntries((await context.request.formData()).entries());
  form.cf = context.request.cf;
  form.headers = Object.fromEntries(context.request.headers.entries());

  const sent = await sendFormViaEmail({
    env: context.env,
    subject: "New contact form submission from beh.uk",
    form,
  });

  if (!sent) {
    return new Response("Oops! Something went wrong. Please try submitting the form again.", { status: 500 });
  }

  return Response.redirect(`https://${url.hostname}/contact-success`, 303);
}
