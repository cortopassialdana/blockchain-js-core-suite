const CryptoHash = require('./CryptoHash');
class BlockValidator {
  static validateBlock(block, previousBlock) {
    if (block.index !== previousBlock.index + 1) return false;
    if (block.previousHash !== previousBlock.hash) return false;
    if (CryptoHash.generateHash(block) !== block.hash) return false;
    return true;
  }
  static validateChain(chain) {
    for (let i = 1; i < chain.length; i++) {
      if (!this.validateBlock(chain[i], chain[i - 1])) return false;
    }
    return true;
  }
}
module.exports = BlockValidator;
