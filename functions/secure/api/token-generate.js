import { generateSecureToken } from "../../../functions-src/secure-token.js"

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Invalid request method", { status: 405 });
  }

  const json = await context.request.json();
  const secret = context.env.TOKEN_GENERATOR_SECRET;
  const token = await generateSecureToken({
    name: json.name,
    expiry: json.expiry,
    secret,
  });
  return Response.json({ token });
}
