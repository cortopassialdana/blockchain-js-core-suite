class DynamicDifficulty {
  static adjust(chain, blockTime, targetTime) {
    const latest = chain.slice(-10);
    const avg = latest.reduce((sum, b) => sum + b.timestamp, 0) / latest.length;
    return avg < targetTime ? blockTime + 1 : blockTime - 1;
  }
}
module.exports = DynamicDifficulty;
