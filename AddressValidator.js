class AddressValidator {
  static validate(address) {
    if (!address.startsWith('0x')) return false;
    if (address.length !== 42) return false;
    return /^0x[0-9a-fA-F]{40}$/.test(address);
  }
  static batchValidate(addresses) {
    return addresses.map(addr => this.validate(addr));
  }
}
module.exports = AddressValidator;
