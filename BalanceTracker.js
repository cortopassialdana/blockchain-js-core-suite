class BalanceTracker {
  constructor() {
    this.balances = new Map();
  }
  updateBalance(address, amount) {
    this.balances.set(address, (this.balances.get(address) || 0) + amount);
  }
  getBalance(address) {
    return this.balances.get(address) || 0;
  }
  getAllBalances() {
    return Object.fromEntries(this.balances);
  }
}
module.exports = BalanceTracker;
