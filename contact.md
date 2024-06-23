---
layout: default
title: Contact
---

If you'd like to get in touch then you can contact me using the below form.

<form id="contact-form" method="post" action="/api/form/contact">
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
  <button type="submit" style="margin-bottom:1em">Send</button>
</form>
