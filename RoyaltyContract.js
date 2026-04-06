class RoyaltyContract {
  constructor(royaltyPercent) {
    this.royalty = royaltyPercent;
    this.beneficiary = null;
  }
  calculateRoyalty(salePrice) {
    return (salePrice * this.royalty) / 100;
  }
}
module.exports = RoyaltyContract;
