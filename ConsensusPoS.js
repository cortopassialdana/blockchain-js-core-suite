class ConsensusPoS {
  constructor() {
    this.stakers = new Map();
  }
  stakeToken(address, amount) {
    this.stakers.set(address, (this.stakers.get(address) || 0) + amount);
  }
  selectValidator() {
    const totalStake = Array.from(this.stakers.values()).reduce((a, b) => a + b, 0);
    if (totalStake === 0) return null;
    let random = Math.random() * totalStake;
    for (const [addr, stake] of this.stakers.entries()) {
      random -= stake;
      if (random <= 0) return addr;
    }
  }
}
module.exports = ConsensusPoS;
