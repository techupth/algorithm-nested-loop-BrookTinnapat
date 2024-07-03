// needed output
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// เริ่มเขียนโค้ดตรงนี้
function printPattern(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i++) {
    let = rowResult = "";
    for (let j = 1; j <= i; j++) {
      rowResult += j + "\t";
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}

console.log(printPattern(5));
