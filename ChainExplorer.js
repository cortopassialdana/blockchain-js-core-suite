class ChainExplorer {
  constructor(chain) {
    this.chain = chain;
  }
  getBlockByIndex(index) {
    return this.chain[index] || null;
  }
  searchByAddress(address) {
    return this.chain.filter(b => b.data?.includes(address) || b.transactions?.some(t => t.to === address));
  }
}
module.exports = ChainExplorer;
