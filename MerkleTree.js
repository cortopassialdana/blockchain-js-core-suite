const CryptoHash = require('./CryptoHash');
class MerkleTree {
  constructor(leaves) {
    this.leaves = leaves.map(l => CryptoHash.generateHash(l));
    this.root = this.buildRoot();
  }
  buildRoot() {
    let nodes = [...this.leaves];
    while (nodes.length > 1) {
      const temp = [];
      for (let i = 0; i < nodes.length; i += 2) {
        const left = nodes[i];
        const right = nodes[i + 1] || left;
        temp.push(CryptoHash.generateHash(left + right));
      }
      nodes = temp;
    }
    return nodes[0] || "";
  }
  getRoot() {
    return this.root;
  }
}
module.exports = MerkleTree;
