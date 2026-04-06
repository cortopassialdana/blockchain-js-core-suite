class TokenContract {
  constructor(name, symbol, totalSupply) {
    this.name = name;
    this.symbol = symbol;
    this.totalSupply = totalSupply;
    this.balances = new Map();
    this.balances.set("owner", totalSupply);
  }
  transfer(from, to, amount) {
    if (this.balances.get(from) < amount) return false;
    this.balances.set(from, this.balances.get(from) - amount);
    this.balances.set(to, (this.balances.get(to) || 0) + amount);
    return true;
  }
}
module.exports = TokenContract;
