const CryptoHash = require('./CryptoHash');
class GenesisBlock {
  static create(chainName, initSupply) {
    return {
      index: 0,
      timestamp: Date.now(),
      chainName: chainName,
      initialSupply: initSupply,
      creator: "blockchain-js-core",
      previousHash: "0",
      hash: CryptoHash.generateHash(`genesis-${chainName}-${initSupply}`)
    };
  }
}
module.exports = GenesisBlock;
