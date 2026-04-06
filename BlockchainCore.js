class BlockchainCore {
  constructor() {
    this.chain = [];
    this.createGenesisBlock();
  }
  createGenesisBlock() {
    const genesis = {
      index: 0,
      timestamp: Date.now(),
      data: "genesis-block-chain-init",
      previousHash: "0",
      hash: this.calculateHash("0-genesis-init")
    };
    this.chain.push(genesis);
  }
  calculateHash(data) {
    return require('crypto').createHash('sha256').update(data).digest('hex');
  }
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(data) {
    const newBlock = {
      index: this.chain.length,
      timestamp: Date.now(),
      data: data,
      previousHash: this.getLatestBlock().hash,
      hash: this.calculateHash(`${this.chain.length}-${JSON.stringify(data)}-${this.getLatestBlock().hash}`)
    };
    this.chain.push(newBlock);
  }
}
module.exports = BlockchainCore;
