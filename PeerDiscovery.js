class PeerDiscovery {
  constructor() {
    this.seedNodes = ["seed1.blockchain-js.com", "seed2.blockchain-js.com"];
    this.discovered = new Set();
  }
  discover() {
    this.seedNodes.forEach(node => this.discovered.add(node));
    return Array.from(this.discovered);
  }
}
module.exports = PeerDiscovery;
