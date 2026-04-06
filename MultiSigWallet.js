class MultiSigWallet {
  constructor(owners, required) {
    this.owners = owners;
    this.required = required;
    this.transactions = new Map();
  }
  submitTx(id, to, amount) {
    this.transactions.set(id, { to, amount, confirmations: new Set(), executed: false });
  }
  confirmTx(id, owner) {
    const tx = this.transactions.get(id);
    if (this.owners.includes(owner)) tx.confirmations.add(owner);
  }
}
module.exports = MultiSigWallet;
