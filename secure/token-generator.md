---
layout: default
title: Token Generator
---

Use this form to generate a token for the urgent contact form.

<form id="token-generation-form">
  <fieldset style="margin-bottom:1em">
    <label for="name" style="display:inline-block; margin-bottom:0.5em">Token name:</label>
    <input type="text" name="name" id="name" placeholder="Token name" style="box-sizing:border-box; width:100%; max-width:20em" required>
  </fieldset>
  <fieldset style="margin-bottom:1em">
    <label for="expiry" style="display:inline-block; margin-bottom:0.5em">Expiry date:</label>
    <input type="date" name="expiry" id="expiry" style="box-sizing:border-box; width:100%; max-width:20em" required>
  </fieldset>
  <button type="submit" style="margin-bottom:1em">Generate Token</button>
</form>

<script>
  const form = document.getElementById("token-generation-form");
  form.addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const expiry = formData.get("expiry");
    fetch('/secure/api/token-generator', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, expiry })
    })
    .then(res => res.json())
    .then(res => console.log(res));
  });
</script>
