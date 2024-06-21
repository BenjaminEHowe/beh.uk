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

async function sendFormViaPush({env, to, form}) {
  if (to === undefined) {
    to = env.PUSHOVER_BEN;
  }
  return await sendFormViaPushover(env.PUSHOVER_KEY, to, form);
}

async function sendFormViaPushover(apiKey, to, form) {
  const response = await fetch(new Request("https://api.pushover.net/1/messages.json", {
    method: "POST",
    headers: {
      "user-agent": USER_AGENT,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      token: apiKey,
      user: to,
      message: formToText(form),
    }),
  }));
  return response.ok;
}

export { sendFormViaPush }
