class AntiDoubleSpend {
  constructor() {
    this.spentTxs = new Set();
  }
  check(txHash) {
    if (this.spentTxs.has(txHash)) return false;
    this.spentTxs.add(txHash);
    return true;
  }
}
module.exports = AntiDoubleSpend;
