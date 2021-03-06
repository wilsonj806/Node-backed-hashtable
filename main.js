(() => {
  // NOTE THE HASH TABLE DOES NOT HANDLE SPACE SEPARATED CHARACTERS
  //... NOR DOES IT HANDLE DUPLICATES
  const HashTable = require('./hashTableV0')
  const HashTableV05 = require('./hashTableV05')

  const hashTable = new HashTable()
  const hashTablev05 = new HashTableV05()

  hashTable.put('工', 'a')
  hashTable.put('式','aa')
  hashTable.put('以','c')
  hashTable.put('了','b')
  hashTable.put('我','q')
  hashTable.put('很','tve')
  hashTable.put('你','wq')
  hashTable.put('的','r')
  hashTable.put('但','wjg')
  hashTable.put('时','jf')
  hashTable.put('人','w')
  hashTable.print5();
  console.log('--------------------------------\n Hashtable Version 0.5 Below \n--------------------------------')
  hashTablev05.put('工', 'a')
  hashTablev05.put('式','aa')
  hashTablev05.put('以','c')
  hashTablev05.put('我','q')
  hashTablev05.put('很','tve')
  hashTablev05.put('你','wq')
  hashTablev05.put('了','b')
  hashTablev05.put('的','r')
  hashTablev05.put('但','wjg')
  hashTablev05.put('笔','tt')
  hashTablev05.put('扫','rv')
  hashTablev05.put('时','jf')
  hashTablev05.put('人','w')
  hashTablev05.put('下','gh')
  hashTablev05.put('家','pe')
  hashTablev05.put('美','ugdu')
  hashTablev05.put('第','tx')
  hashTablev05.put('到','gc')
  hashTablev05.put('本','sg')
  hashTablev05.put('能','ce')
  hashTablev05.put('永','yni')
  hashTablev05.put('华','wxf')
  hashTablev05.put('他','wb')
  hashTablev05.put('来','go')
  hashTablev05.put('籍','tdij')
  hashTablev05.put('如','vk')
  hashTablev05.put('果','js')
  hashTablev05.printTable();
  // NOTE You would probably actually run into rehashing issues
  //... but javascript arrays are dynamic so it's already bumping entries back up
  hashTablev05.remove('wq')
  hashTablev05.remove('ugdu')
  console.log('--------------------------------\n Reprinting Table\n--------------------------------')
  hashTablev05.printTable()

})()