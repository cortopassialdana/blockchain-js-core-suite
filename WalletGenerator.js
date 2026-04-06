const crypto = require('crypto');
class WalletGenerator {
  static generateWallet() {
    const privateKey = crypto.randomBytes(32).toString('hex');
    const publicKey = crypto.createHash('sha256').update(privateKey).digest('hex');
    const address = crypto.createHash('ripemd160').update(publicKey).digest('hex');
    return { privateKey, publicKey, address: `0x${address}` };
  }
  static generateMultipleWallets(count) {
    return Array.from({ length: count }, () => this.generateWallet());
  }
}
module.exports = WalletGenerator;
