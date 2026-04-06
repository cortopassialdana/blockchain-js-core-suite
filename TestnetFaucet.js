class TestnetFaucet {
  constructor(dripAmount) {
    this.drip = dripAmount;
    this.lastClaim = new Map();
  }
  claim(address) {
    const now = Date.now();
    if (this.lastClaim.get(address) > now - 3600000) return false;
    this.lastClaim.set(address, now);
    return this.drip;
  }
}
module.exports = TestnetFaucet;
