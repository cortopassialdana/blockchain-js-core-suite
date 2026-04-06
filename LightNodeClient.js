class LightNodeClient {
  constructor(rpc) {
    this.rpc = rpc;
  }
  async getBalance(address) {
    return { address, balance: Math.random() * 1000000 };
  }
}
module.exports = LightNodeClient;
