class BatchTransfer {
  static transfer(token, from, recipients) {
    for (const { to, amount } of recipients) {
      token.transfer(from, to, amount);
    }
    return true;
  }
}
module.exports = BatchTransfer;
