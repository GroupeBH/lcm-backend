const bcrypt = require("bcrypt");

function comparePassword(password, hash) {
  const comparePassword = bcrypt.compareSync(password, hash);
  return comparePassword;
}

module.exports = comparePassword;
