class GasCalculator {
  static calculateGas(transaction) {
    const baseGas = 21000;
    const dataGas = JSON.stringify(transaction.data).length * 68;
    return baseGas + dataGas;
  }
  static calculateFee(gas, gasPrice) {
    return gas * gasPrice;
  }
}
module.exports = GasCalculator;
