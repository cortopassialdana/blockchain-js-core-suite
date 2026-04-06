class BlacklistFilter {
  constructor() {
    this.blacklist = new Set();
  }
  blockAddress(address) {
    this.blacklist.add(address);
  }
  isBlocked(address) {
    return this.blacklist.has(address);
  }
}
module.exports = BlacklistFilter;
