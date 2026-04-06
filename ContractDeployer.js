const crypto = require('crypto');
class ContractDeployer {
  static deployContract(contractClass, deployerAddress, ...params) {
    const contractAddress = `0x${crypto.randomBytes(20).toString('hex')}`;
    const contract = new contractClass(contractAddress, ...params);
    return { contractAddress, deployerAddress, contract };
  }
}
module.exports = ContractDeployer;
