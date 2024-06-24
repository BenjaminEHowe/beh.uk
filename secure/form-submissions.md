---
layout: default
title: Form Submissions
---

<div id="description"></div>
<div id="content"><div class="lds-dual-ring"></div></div>

<script>
  const description = document.getElementById("description");
  const content = document.getElementById("content");
  if (window.location.hash) {
    displaySubmission(window.location.hash.substring(1));
  } else {
    displaySubmissions();
  }

  function displaySubmission(id) {
    description.innerHTML = `
      <p><a href="javascript:displaySubmissions()">Go back to submissions</a></p>
      <h2>Form submission ${id}
    `;
    content.innerHTML = '<div class="lds-dual-ring"></div>';
    fetch(`/secure/api/form/${id}`, {
      method: "GET",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
      },
    })
    .then(res => res.json())
    .then(submission => {
      const submitted = new Date(submission.submitted_ts);
      content.innerHTML = `
        <h3>Form ID</h3>
        <p>${submission.form_id}</p>
        <h3>Submitted</h3>
        <p>${submitted.toLocaleDateString()} ${submitted.toLocaleTimeString()}</p>
      `;
      if (submission.reply_email) {
        const replyEmail = submission.reply_email;
        content.innerHTML += `
          <h3>Email address (reply-to)</h3>
          <p><a href="mailto:${replyEmail}">${replyEmail}</a></p>
        `;
      }
      if (submission.spam_reasons.length) {
        content.innerHTML += "<h3>Spam reasons</h3><ul>";
        submission.spam_reasons.forEach(reason => {
          content.innerHTML += `<li>${reason}</li>`;
        })
        content.innerHTML += "</ul>";
      }
      content.innerHTML += `
        <h3>Form fields</h3>
        <p>${escapeHtml(JSON.stringify(submission.fields))}</p>
        <h3>cf object</h3>
        <p>${JSON.stringify(submission.cf)}</p>
        <h3>HTTP headers</h3>
        <p>${JSON.stringify(submission.headers)}</p>
      `;
      window.location.hash = id;
    })
  }

  function displaySubmissions() {
    description.innerHTML = "<p>This table shows form submissions over the last 30 days:</p>";
    content.innerHTML = '<div class="lds-dual-ring"></div>';
    fetch("/secure/api/form", {
      method: "GET",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
      },
    })
    .then(res => res.json())
    .then(submissions => {
      const table = document.createElement("table");
      const thead = table.createTHead();
      const headings = thead.insertRow();
      [
        "Submission ID",
        "Form ID",
        "Submitted",
        "Spam Reasons",
        "IP Address",
        "ASN",
      ].forEach(heading => {
        const th = document.createElement("th");
        th.innerHTML = heading;
        headings.appendChild(th);
      });
      const tbody = table.createTBody();
      submissions.forEach(row => {
        const tr = tbody.insertRow();

        const tdSubmissionId = tr.insertCell();
        const id = row.submission_id;
        tdSubmissionId.innerHTML = `<a href="javascript:displaySubmission('${id}')">${id}</a>`;

        const tdFormId = tr.insertCell();
        tdFormId.innerHTML = row.form_id;

        const tdSubmitted = tr.insertCell();
        const submitted = new Date(row.submitted_ts);
        tdSubmitted.innerHTML = `${submitted.toLocaleDateString()} ${submitted.toLocaleTimeString()}`;

        const tdSpamReasons = tr.insertCell();
        tdSpamReasons.innerHTML = row.spam_reasons.join([separator = ', ']);

        const tdIpAddress = tr.insertCell();
        tdIpAddress.innerHTML = `${getFlagEmoji(row.country)} <a href="https://cleantalk.org/blacklists/${row.ip}">${row.ip}</a>`;

        const tdAsn = tr.insertCell();
        const asn = row.asn;
        tdAsn.innerHTML = `<a href="https://bgp.tools/as/${asn}">AS${asn}</a>`;
      });
      content.innerHTML = table.outerHTML;
      history.pushState("", document.title, window.location.pathname + window.location.search);
    });
  }

  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // https://www.bqst.fr/country-code-to-flag-emoji/
  const getFlagEmoji = countryCode=>String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt()));
</script>
