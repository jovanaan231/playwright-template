function randomString(length, includeNumbers = false) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const combinedChars = includeNumbers ? chars + digits : chars;

  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * combinedChars.length);
    result += combinedChars[randomIndex];
  }
  return result;
}

function randomNumber(length) {
  const digits = "0123456789";
  let result = "82"; // Nomor dimulai dengan 8
  for (let i = 1; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    result += digits[randomIndex];
  }
  return result;
}

function randomSerialNumber(length) {
  const digits = "0123456789";
  let result = "SN";
  for (let i = 2; i < length; i++) {
    // Mulai dari 2 karena "SN" sudah menempati dua karakter
    const randomIndex = Math.floor(Math.random() * digits.length);
    result += digits[randomIndex];
  }
  return result;
}

module.exports = { randomString, randomNumber, randomSerialNumber };
