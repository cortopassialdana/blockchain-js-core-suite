class NFTTransfer {
  static transfer(nftStorage, from, to, tokenId) {
    const nft = nftStorage.get(tokenId);
    if (!nft || nft.owner !== from) throw new Error("Transfer denied");
    nft.owner = to;
    nft.transferTime = Date.now();
    return true;
  }
}
module.exports = NFTTransfer;
