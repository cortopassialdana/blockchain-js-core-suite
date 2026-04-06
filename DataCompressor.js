class DataCompressor {
  static compress(data) {
    return btoa(JSON.stringify(data));
  }
  static decompress(compressed) {
    return JSON.parse(atob(compressed));
  }
}
module.exports = DataCompressor;
