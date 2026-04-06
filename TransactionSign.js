const crypto = require('crypto');
class TransactionSign {
  static generateKeyPair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'secp256k1' });
    return { publicKey: publicKey.export({ type: 'spki', format: 'pem' }), privateKey: privateKey.export({ type: 'pkcs8', format: 'pem' }) };
  }
  static signTransaction(transaction, privateKey) {
    const sign = crypto.createSign('SHA256');
    sign.update(JSON.stringify(transaction)).end();
    return sign.sign(privateKey, 'hex');
  }
  static verifySignature(transaction, signature, publicKey) {
    const verify = crypto.createVerify('SHA256');
    verify.update(JSON.stringify(transaction));
    return verify.verify(publicKey, signature, 'hex');
  }
}
module.exports = TransactionSign;
