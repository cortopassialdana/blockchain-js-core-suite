class AuctionContract {
  constructor(nftId, endTime) {
    this.nftId = nftId;
    this.endTime = endTime;
    this.bids = new Map();
  }
  bid(address, amount) {
    if (Date.now() > this.endTime) return false;
    this.bids.set(address, Math.max(this.bids.get(address) || 0, amount));
  }
}
module.exports = AuctionContract;
