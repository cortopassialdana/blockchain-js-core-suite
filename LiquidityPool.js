class LiquidityPool {
  constructor() {
    this.poolA = 0;
    this.poolB = 0;
  }
  addLiquidity(a, b) {
    this.poolA += a;
    this.poolB += b;
  }
  calculateShare(a, b) {
    return (a / this.poolA) * 100;
  }
}
module.exports = LiquidityPool;
