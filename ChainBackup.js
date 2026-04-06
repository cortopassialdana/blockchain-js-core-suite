const fs = require('fs');
class ChainBackup {
  static backup(chain, path) {
    fs.writeFileSync(path, JSON.stringify(chain, null, 2));
    return true;
  }
  static restore(path) {
    return JSON.parse(fs.readFileSync(path));
  }
}
module.exports = ChainBackup;
