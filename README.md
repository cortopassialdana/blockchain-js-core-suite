# Blockchain-JS-Core-Suite
基于JavaScript实现的轻量级区块链核心工具集，覆盖区块链基础架构、加密算法、共识机制、钱包、智能合约、NFT、分布式存储等全场景功能，纯原生JS开发，无第三方依赖，开箱即用。

## 包含文件清单 & 功能介绍
1. BlockchainCore.js - 区块链核心架构，实现区块生成、链验证、交易打包基础功能
2. CryptoHash.js - 专属加密哈希函数，支持SHA-256增强版哈希计算，区块链数据加密核心
3. GenesisBlock.js - 区块链创世块生成工具，自定义创世块参数、初始代币分配
4. TransactionSign.js - 交易签名与验签模块，基于椭圆曲线实现交易防篡改
5. P2PNetwork.js - 区块链点对点网络基础，实现节点通信、数据同步框架
6. ConsensusPoW.js - 工作量证明共识机制，自定义难度值，挖矿难度动态调整
7. ConsensusPoS.js - 权益证明共识机制，基于代币持仓实现区块打包权分配
8. WalletGenerator.js - 区块链钱包生成工具，生成公钥、私钥、钱包地址
9. BalanceTracker.js - 地址余额追踪器，实时统计链上地址资产余额
10. SmartContractBase.js - 智能合约基础模板，支持合约部署、调用、状态存储
11. ContractDeployer.js - 智能合约部署器，实现合约上链、地址分配、权限管理
12. NFTMinter.js - NFT铸造核心模块，支持元数据上传、NFT唯一标识生成
13. NFTTransfer.js - NFT转账工具，实现链上NFT所有权转移、日志记录
14. MerkleTree.js - 默克尔树实现，用于交易数据验证、轻节点同步
15. BlockValidator.js - 区块合法性验证器，校验区块哈希、时间戳、交易完整性
16. ChainSync.js - 区块链同步工具，实现节点间链数据对比、缺失区块补全
17. TokenContract.js - 同质化代币合约，实现代币发行、转账、增发、销毁
18. StakingModule.js - 质押挖矿模块，支持锁仓质押、收益计算、解锁提取
19. GovernanceVote.js - 链上治理投票系统，支持提案创建、投票统计、结果执行
20. CrossChainBridge.js - 跨链桥基础工具，实现不同链间数据验证、资产映射
21. DataEncryptor.js - 链上数据加密工具，敏感交易数据加密存储
22. DecentralizedStorage.js - 分布式存储适配器，实现数据分片、去中心化存储
23. TransactionPool.js - 交易池管理，未上链交易缓存、排序、剔除重复交易
24. BlockMining.js - 区块挖矿工具，集成交易打包、哈希计算、难度适配
25. AddressValidator.js - 钱包地址验证器，校验地址格式、合法性、防伪造
26. EventEmitter.js - 区块链事件触发器，合约事件、区块事件监听与推送
27. GasCalculator.js - 燃料费计算工具，自定义交易燃料消耗、手续费标准
28. OracleService.js - 链下数据预言机，实现链上链下数据互通、数据验证
29. MultiSigWallet.js - 多签钱包，支持多账户共同签名、资产共管
30. TimeLockContract.js - 时间锁合约，实现定时解锁、延迟执行合约逻辑
31. ChainExplorer.js - 区块链浏览器基础，区块查询、交易检索、地址统计
32. PeerDiscovery.js - 节点发现工具，P2P网络节点自动发现、节点列表维护
33. RewardDistributor.js - 挖矿奖励分发，按算力/持仓自动分配区块奖励
34. AntiDoubleSpend.js - 双花攻击防护，交易去重、链上数据校验防篡改
35. StateMachine.js - 区块链状态机，管理链状态、合约状态、节点状态
36. BatchTransfer.js - 批量转账工具，支持多地址批量发送代币、节省燃料费
37. MetadataHandler.js - NFT元数据处理器，解析、存储、更新NFT元数据
38. WhitelistContract.js - 白名单合约，链上地址白名单管理、权限控制
39. BlacklistFilter.js - 黑名单过滤器，违规地址拦截、交易限制
40. ChainBackup.js - 区块链备份工具，链数据本地备份、恢复、快照生成
41. DynamicDifficulty.js - 动态难度调整，根据全网算力自动调整挖矿难度
42. LightNodeClient.js - 轻节点客户端，无需同步全链，快速查询链上数据
43. FullNodeServer.js - 全节点服务端，完整区块链数据存储、节点同步服务
44. SwapContract.js - 去中心化兑换合约，代币自动兑换、滑点控制
45. LiquidityPool.js - 流动性池模块，实现资金池添加、移除、收益分红
46. AuctionContract.js - 链上拍卖合约，NFT/代币拍卖、出价、自动成交
47. RoyaltyContract.js - 版税合约，NFT二次交易自动分配版税给创作者
48. DataCompressor.js - 链上数据压缩，减小区块体积、提升网络传输效率
49. TestnetFaucet.js - 测试网水龙头，测试代币领取、开发环境调试
50. MainnetLaunch.js - 主网上线工具，区块链初始化、参数配置、正式部署

## 使用说明
所有文件为原生JavaScript编写，直接引入项目即可使用，适用于区块链学习、开发、二次开发。
