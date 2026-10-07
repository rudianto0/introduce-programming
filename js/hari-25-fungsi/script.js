// ===== Day 25: Functions =====

// 1) Function declaration
function sapa(nama) {
  return `Halo, ${nama}!`;
}
console.log(sapa("Andi"));

// A function with two parameters and a calculation
function tambah(a, b) {
  return a + b;
}
console.log("2 + 3 =", tambah(2, 3));

// A function that returns nothing (undefined) - it just performs an action
function tampilkan(nama) {
  console.log("Menampilkan:", nama);
}
tampilkan("Buku");

// 2) Function expression: store a function inside a variable
const kali = function (a, b) {
  return a * b;
};
console.log("4 * 5 =", kali(4, 5));

// 3) Arrow function: a shorter, modern way to write functions
const jumlah = (a, b) => a + b; // one expression: no braces and no return needed
const bagi = (a, b) => {
  return a / b; // with braces we still need an explicit return
};
console.log("4 + 6 =", jumlah(4, 6));
console.log("20 / 4 =", bagi(20, 4));

// Default parameter: used when the argument is missing
function sapaDefault(nama = "teman") {
  return `Hai, ${nama}`;
}
console.log(sapaDefault());          // "Hai, teman"
console.log(sapaDefault("Dita"));    // "Hai, Dita"

// On-page output
const output = document.getElementById("output");
output.textContent = sapa("Budi") + " Hasil tambah: " + tambah(10, 20);
