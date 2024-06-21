---
layout: default
title: Urgent Contact
---

If you have an access token then you can send me an urgent message using this form:

<form id="contact-form" method="post" action="/api/contact-urgent">
  <fieldset style="display:none">
    <label for="name">Leave blank if you're human:</label>
    <input type="text" name="name" id="name" placeholder="Leave blank if you're human">
  </fieldset>
  <fieldset style="margin-bottom:1em">
    <label for="email" style="display:inline-block; margin-bottom:0.5em">Email address:</label>
    <input type="email" name="email" id="email" placeholder="Email address" style="box-sizing:border-box; width:100%; max-width:20em" required>
  </fieldset>
  <fieldset style="margin-bottom:0.5em">
    <label for="message">Message:</label>
  </fieldset>
  <fieldset style="margin-bottom:1em">
    <textarea name="message" id="message" placeholder="Message" style="box-sizing:border-box; width:100%; max-width:60em; height:15em" required></textarea>
  </fieldset>
  <fieldset style="margin-bottom:1em">
    <label for="token" style="display:inline-block; margin-bottom:0.5em">Token:</label>
    <input type="text" name="token" id="token" placeholder="token" style="box-sizing:border-box; width:100%; max-width:20em" required>
  </fieldset>
  <button type="submit" style="margin-bottom:1em">Send</button>
</form>

<script>
  document.getElementById("contact-form").addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const token = formData.get("token");
    fetch("/api/token-verify", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ token })
    })
    .then(res => res.json())
    .then(res => {
      const element = document.getElementById("token-verify-output");
      if (!res.ok) {
        alert(`Token ${token} does not appear to be valid.`)
      } else {
        fetch("/api/contact-urgent", {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(Object.fromEntries(formData.entries()))
        })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            alert("Your message has been sent successfully.");
            event.target.reset();
          } else {
            alert("An unknown error occurred.");
          }
        })
      }
    });
  });
</script>
