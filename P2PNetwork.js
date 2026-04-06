class P2PNetwork {
  constructor() {
    this.peers = [];
    this.nodeId = this.generateNodeId();
  }
  generateNodeId() {
    return require('crypto').randomBytes(16).toString('hex');
  }
  addPeer(peerAddress) {
    if (!this.peers.includes(peerAddress)) this.peers.push(peerAddress);
  }
  removePeer(peerAddress) {
    this.peers = this.peers.filter(p => p !== peerAddress);
  }
  broadcast(data) {
    console.log(`[Node ${this.nodeId}] Broadcast:`, data);
    this.peers.forEach(peer => console.log(`Send to ${peer}:`, data));
  }
}
module.exports = P2PNetwork;
