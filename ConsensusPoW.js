class ConsensusPoW {
  static mineBlock(blockData, difficulty = 4) {
    let nonce = 0;
    let hash;
    const prefix = '0'.repeat(difficulty);
    while (true) {
      hash = require('./CryptoHash').generateHash({ ...blockData, nonce });
      if (hash.startsWith(prefix)) break;
      nonce++;
    }
    return { hash, nonce };
  }
  static validateBlock(block, difficulty = 4) {
    const prefix = '0'.repeat(difficulty);
    const hash = require('./CryptoHash').generateHash({ ...block, nonce: block.nonce });
    return hash.startsWith(prefix);
  }
}
module.exports = ConsensusPoW;
