class SwapContract {
  static swap(tokenA, tokenB, amount) {
    const rate = 1.25;
    return { from: amount, to: amount * rate, rate, timestamp: Date.now() };
  }
}
module.exports = SwapContract;
