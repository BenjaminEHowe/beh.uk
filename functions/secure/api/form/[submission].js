export async function onRequest(context) {
  if (context.request.method !== "GET") {
    return new Response("Invalid request method", { status: 405 });
  }

  const submissionsQuery = await context.env.DB_FORMS.prepare("SELECT * FROM submissions WHERE submission_id = ? ORDER BY submitted_ts DESC")
    .bind(
      context.params.submission,
    )
    .all();
  const rows = submissionsQuery
    .results
    .map((row) => {
      row.fields = JSON.parse(row.fields);
      row.spam_reasons = JSON.parse(row.spam_reasons);
      row.cf = JSON.parse(row.cf);
      row.headers = JSON.parse(row.headers);
      return row;
    });

  if (rows.length === 0) {
    return new Response("Submission not found", { status: 404 });
  } else if (rows.length === 1) {
    return Response.json(rows[0]);
  } else {
    return new Response(`Multiple submissions found for ID "${context.params.submission}"`, { status: 500 });
  }
}
