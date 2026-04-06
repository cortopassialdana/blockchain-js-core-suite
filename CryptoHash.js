class CryptoHash {
  static generateHash(input) {
    const crypto = require('crypto');
    const inputStr = typeof input === 'object' ? JSON.stringify(input) : String(input);
    const baseHash = crypto.createHash('sha256').update(inputStr).digest('hex');
    const enhancedHash = crypto.createHash('sha256').update(baseHash + inputStr.length).digest('hex');
    return enhancedHash;
  }
  static compareHash(input, targetHash) {
    return this.generateHash(input) === targetHash;
  }
}
module.exports = CryptoHash;
