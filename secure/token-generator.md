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
<p>Your token is: <pre style="display:inline" id="token-value">...</pre></p>


<form id="token-verification-form">
  <fieldset style="margin-bottom:1em">
    <label for="name" style="display:inline-block; margin-bottom:0.5em">Token:</label>
    <input type="text" name="token" id="token" placeholder="Token" style="box-sizing:border-box; width:100%; max-width:20em" required>
  </fieldset>
  <button type="submit" style="margin-bottom:1em">Verify Token</button>
</form>
<p>Token status: <span id="token-verify-output">?</span></p>

<script>
  document.getElementById("token-generation-form").addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const expiry = formData.get("expiry");
    fetch('/secure/api/token-generate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, expiry })
    })
    .then(res => res.json())
    .then(res => document.getElementById("token-value").innerHTML = res.token);
  });

  document.getElementById("token-verification-form").addEventListener("submit", event => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const token = formData.get("token");
    fetch('/api/token-verify', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    })
    .then(res => res.json())
    .then(res => {
      const element = document.getElementById("token-verify-output");
      if (res.ok) {
        element.innerHTML = "ok";
      } else {
        element.innerHTML = "BAD";
      }
    });
  });
</script>
