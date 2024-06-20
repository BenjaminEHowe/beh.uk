const encoder = new TextEncoder();

async function generateHash(input) {
  return [
    ...new Uint8Array(
      await crypto.subtle.digest(
        { name: 'SHA-256' },
        encoder.encode(input)
      )
    )
  ].map(x => x.toString(16).padStart(2, '0')).join('')
}

async function generateSecureToken({
  expiry,
  name,
  secret,
}) {
  const hash = await generateHash(`${name}/${expiry}/${secret}`).substring(0, 8);
  return `${name}/${expiry}/${hash}`;
}

async function verifySecureToken({
  secret,
  token,
}) {
  const [name, expiry, hash] = token.split("/");
  
  const expiryDate = new Date(expiry).addDays(1);
  if (expiryDate < new Date()) {
    return false;
  }

  const expectedHash = await generateHash(`${name}/${expiry}/${secret}`).substring(0, 8);
  if (hash != expectedHash) {
    return false;
  }

  return true;
}

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

export {
  generateSecureToken,
  verifySecureToken,
}
