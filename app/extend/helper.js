const SHA256 = require('crypto-js/sha256');
module.exports = {
  SHA256(pwd) {
    return SHA256(pwd).toString();
  }
}