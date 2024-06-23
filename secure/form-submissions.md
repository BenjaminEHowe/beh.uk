---
layout: default
title: Form Submissions
---

This table shows form submissions over the last 30 days:
<div id="form-submissions"><div class="lds-dual-ring"></div></div>

<script>
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
    ].forEach(heading => headings.insertCell().innerHTML = heading);
    const tbody = table.createTBody();
    submissions.forEach(row => {
      const tr = tbody.insertRow();

      const tdSubmissionId = tr.insertCell();
      tdSubmissionId.innerHTML = row.submission_id;

      const tdFormId = tr.insertCell();
      tdFormId.innerHTML = row.form_id;

      const tdSubmitted = tr.insertCell();
      tdSubmitted.innerHTML = row.submitted_ts;

      const tdSpamReasons = tr.insertCell();
      tdSpamReasons.innerHTML = row.spam_reasons;

      const tdIpAddress = tr.insertCell();
      tdIpAddress.innerHTML = `${getFlagEmoji(row.country)} <a href="https://cleantalk.org/blacklists/${row.ip}">${row.ip}</a>`;

      const tdAsn = tr.insertCell();
      tdAsn.innerHTML = `<a href="https://bgp.tools/as/${row.asn}">AS${row.asn}</a>`;
    });
    document.getElementById("form-submissions").innerHTML = table.outerHTML;
  });

  // https://www.bqst.fr/country-code-to-flag-emoji/
  const getFlagEmoji = countryCode=>String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt()));
</script>
