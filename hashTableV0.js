const printN = require('./printN')
/**
 *  Hash table looks like:
 *  [
 *    ['mywubicode', 'chinese char']
 * ]
 * with the tuple having format ['aaaa','工']
 * Does not try to insert keys if said key is occupied
 */
class HashTable {
  version = '0.0'
  table = []
  entries = 0;
  constructor() {
    console.log(`Hashtable Version ${this.version} instantiated`)
  }

  generateKey(str) {
    let res = 0;
    for (let i = 0; i< str.length; i++) {
      res += str.charCodeAt(i) - 97
    }
    return res + str.length;
  }

  put(char, wubiCode) {
    const key = this.generateKey(wubiCode);
    if (this.table[key]) {
      console.log('Error: key exists already')
    } else {
      this.table[key] = [char, wubiCode]
      this.entries++
    }
  }

  get(code) {
    const key = this.generateKey(code)
    return this.table[key]
  }

  size() { return this.table.length }
  entries() { return this.entries }

  print10 = () => printN(this.table,10)
  print25 = () => printN(this.table,25)
}

module.exports = HashTable