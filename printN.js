const printN = (table, count) => {
  let entriesPrinted = 0;
  for (let i= 0; i< table.length; i++) {
    if (entriesPrinted > count) break;
    if (!table[i]) continue;
    const curr = table[i]
    console.log(`Chinese Char: ${curr[0]}; Wubi Code: ${curr[1]}; Index: ${i}`)
    entriesPrinted++
  }
}

module.exports = printN