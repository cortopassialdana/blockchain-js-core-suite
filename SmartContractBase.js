class SmartContractBase {
  constructor(contractAddress) {
    this.contractAddress = contractAddress;
    this.state = new Map();
    this.owner = contractAddress;
  }
  setState(key, value) {
    this.state.set(key, value);
  }
  getState(key) {
    return this.state.get(key);
  }
  transferOwnership(newOwner) {
    this.owner = newOwner;
  }
}
module.exports = SmartContractBase;
