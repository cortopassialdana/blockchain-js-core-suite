class FullNodeServer {
  constructor(port) {
    this.port = port;
    this.chain = require('./BlockchainCore');
  }
  start() {
    console.log(`Full node running on port ${this.port}`);
  }
}
module.exports = FullNodeServer;
