const printN = require('./printN')
/**
 *  Hashtable looks like:
 *  [
 *    ['mywubicode', 'chinese char']
 * ]
 * with the tuple having format ['aaaa','工']
 * Hashtable uses linear probing to find a suitable entry
 */
class HashTable {
  version = '0.5'
  table = []
  entries = 0;
  constructor() {
    console.log(`Hashtable Version ${this.version} instantiated`)
  }

  // NOTE Returns a number
  generateKey(str) {
    let res = 0;
    for (let i = 0; i< str.length; i++) {
      // Get the character code and normalize it, then sum it up
      res += str.charCodeAt(i) - 97
    }

    return res + str.length;
  }

  put(cnChar, wubiCode) {
    let hashedKey = this.generateKey(wubiCode);
    if (this.occupied(hashedKey)) {
      let stopIndex = hashedKey
      if (hashedKey == this.table.length - 1) {
        // Wrap around if we hit the end
        hashedKey = 0
      } else {
        hashedKey++
      }

      // While the current key is occupied and while we don't hit the stop index
      // increment up
      while (this.occupied(hashedKey) && hashedKey != stopIndex) {
        hashedKey = (hashedKey + 1)// % this.table.length
      }
    }
    if (this.occupied(hashedKey)) {
      console.log(`Sorry, key is occupied at position: ${hashedKey}`)
    } else {
      this.table[hashedKey] = [cnChar, wubiCode]
    }

    this.entries++
  }

  get(code) {
    const hashedKey = this.find(code)
    if (hashedKey == -1) return null
    return this.table[hashedKey]
  }

  remove(code) {
    const hashedKey = find(code)
    if (hashedKey === -1) {
      return null
    }
    const wubiPair = this.table[hashedKey]
    this.table[hashedKey] = null
    return wubiPair
  }

  find(code) {
    let hashedKey = this.generateKey(code);
    if (this.occupied(hashedKey) && this.table[hashedKey][1] === code) {
      return hashedKey
    }

    // Use linear probing to find it if the key is not already found
    let stopIndex = hashedKey
    if (hashedKey === this.table.length - 1) {
      hashedKey = 0
    } else {
      hashedKey++
    }

    // Cycle thru the hashtable checking if the current entry is occupied/ at the stopIndex, or if the current entry is euqal to the chracter we want to do
    while (stopIndex != hashedKey && this.occupied(hashedKey) && this.table[hashedKey][1] !== code) {
      hashedKey = (hashedKey + 1)// % this.table.length
    }
    // console.log(this.table[hashedKey], code, hashedKey)
    if (this.occupied(hashedKey) &&
      this.table[hashedKey][1] === code
    ) {
      return hashedKey;
    } else {
      return -1;
    }
  }

  occupied(index) {
    return this.table[index] != null
  }

  size() { return this.table.length }
  entries() { return this.entries }

  print5 = () => printN(this.table,5)
  print10 = () => printN(this.table,10)
  print25 = () => printN(this.table,25)
  printTable = () => printN(this.table, this.entries)
}

module.exports = HashTable