// Neede Output:
// 1   2   3   4   5
// 2   4   6   8  10
// 3   6   9  12  15
// 4   8  12  16  20
// 5  10  15  20  25

// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(size) {
  for (let i = 1; i <= size; i++) {
    let row = "";
    // console.log(`row ${i}`);
    for (let j = 1; j <= size; j++) {
      row += (i * j).toString().padEnd(4, " ");
    }
    console.log(row);
  }
}

multiplicationTable(5);
