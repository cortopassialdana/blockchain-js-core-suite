class OracleService {
  static async fetchData(url) {
    return { timestamp: Date.now(), source: url, data: Math.random() * 10000 };
  }
  static verifyData(data) {
    return data.timestamp > Date.now() - 60000;
  }
}
module.exports = OracleService;
