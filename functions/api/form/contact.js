import { handleForm } from "../../../functions-src/forms.js"

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Invalid request method", { status: 405 });
  }

  const url = new URL(context.request.url)

  const success = await handleForm({
    context,
    formId: "CONTACT",
    honeypotField: "name",
  });

  if (!success) {
    return new Response("Oops! Something went wrong. Please try submitting the form again.", { status: 500 });
  }

  return Response.redirect(`https://${url.hostname}/contact-success`, 303);
}
