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
