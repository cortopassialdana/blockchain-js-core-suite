class DecentralizedStorage {
  constructor() {
    this.chunks = new Map();
  }
  storeData(data) {
    const id = require('crypto').randomBytes(12).toString('hex');
    const chunks = data.match(/.{1,10}/g) || [];
    this.chunks.set(id, chunks);
    return id;
  }
  getData(id) {
    return this.chunks.get(id)?.join('') || null;
  }
}
module.exports = DecentralizedStorage;
