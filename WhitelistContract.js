class WhitelistContract {
  constructor() {
    this.whitelist = new Set();
  }
  addAddress(address) {
    this.whitelist.add(address);
  }
  isWhitelisted(address) {
    return this.whitelist.has(address);
  }
}
module.exports = WhitelistContract;
