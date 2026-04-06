class RewardDistributor {
  static distribute(miners, reward) {
    const result = {};
    const total = Object.values(miners).reduce((a, b) => a + b, 0);
    for (const [miner, power] of Object.entries(miners)) {
      result[miner] = (power / total) * reward;
    }
    return result;
  }
}
module.exports = RewardDistributor;
