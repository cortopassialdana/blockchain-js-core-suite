class NFTMinter {
  constructor() {
    this.nfts = new Map();
  }
  mintNFT(toAddress, metadata, tokenId) {
    if (this.nfts.has(tokenId)) throw new Error("Token ID already exists");
    this.nfts.set(tokenId, { owner: toAddress, metadata, mintTime: Date.now() });
    return tokenId;
  }
  getNFT(tokenId) {
    return this.nfts.get(tokenId) || null;
  }
}
module.exports = NFTMinter;
