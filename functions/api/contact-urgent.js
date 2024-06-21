import { handleForm } from "../../functions-src/forms.js"

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Invalid request method", { status: 405 });
  }

  const headers = Object.fromEntries(context.request.headers.entries());
  const url = new URL(context.request.url)
  const usingJson = (headers["content-type"] === "application/json");

  const success = await handleForm({
    context,
    formId: "URGENT-CONTACT",
    honeypotField: "name",
  });

  if (!success && !usingJson) {
    return new Response("Oops! Something went wrong. Please try submitting the form again.", { status: 500 });
  }

  return usingJson ? 
    Response.json({ success }) :
    Response.redirect(`https://${url.hostname}/contact-success`, 303);
}
