export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Invalid request method", { status: 405 });
  }

  const name = "elder";
  const expiry = "2024-12-31";
  const secret = context.env.TOKEN_GENERATOR_SECRET;

  const encoder = new TextEncoder();
  const hash = [
    ...new Uint8Array(
      await crypto.subtle.digest(
        { name: 'SHA-256' },
        encoder.encode(`${name}/${expiry}/${secret}`)
      )
    )
  ].map(x => x.toString(16).padStart(2, '0')).join('').substring(0, 8)

  return Response.json({ token: `${name}/${expiry}/${hash}` })
}
