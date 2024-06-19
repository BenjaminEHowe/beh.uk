CREATE TABLE IF NOT EXISTS Customers (
  submission_id TEXT PRIMARY KEY,
  form_id TEXT NOT NULL,
  submitted_ts DATETIME NOT NULL,
  reply_email TEXT,
  fields TEXT NOT NULL,
  cf TEXT NOT NULL,
  headers TEXT NOT NULL
);
