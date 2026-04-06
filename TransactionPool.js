class TransactionPool {
  constructor() {
    this.pool = [];
  }
  addTransaction(tx) {
    if (!this.pool.some(t => t.hash === tx.hash)) this.pool.push(tx);
  }
  getPendingTransactions() {
    return [...this.pool];
  }
  clearPool() {
    this.pool = [];
  }
}
module.exports = TransactionPool;
