class StakingModule {
  constructor() {
    this.stakes = new Map();
    this.apy = 0.05;
  }
  stake(address, amount) {
    this.stakes.set(address, { amount, time: Date.now() });
  }
  calculateReward(address) {
    const stake = this.stakes.get(address);
    if (!stake) return 0;
    const days = (Date.now() - stake.time) / (1000 * 60 * 60 * 24);
    return stake.amount * this.apy * (days / 365);
  }
}
module.exports = StakingModule;
