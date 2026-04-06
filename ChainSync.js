class ChainSync {
  static syncChains(localChain, remoteChain) {
    if (remoteChain.length <= localChain.length) return localChain;
    if (require('./BlockValidator').validateChain(remoteChain)) return remoteChain;
    return localChain;
  }
}
module.exports = ChainSync;
