const ConsensusPoW = require('./ConsensusPoW');
const TransactionPool = require('./TransactionPool');
class BlockMining {
  static mineBlock(chain, pool, difficulty) {
    const txs = pool.getPendingTransactions();
    const blockData = { index: chain.length, transactions: txs, timestamp: Date.now() };
    const { hash, nonce } = ConsensusPoW.mineBlock(blockData, difficulty);
    return { ...blockData, hash, nonce };
  }
}
module.exports = BlockMining;
