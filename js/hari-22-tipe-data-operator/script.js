// ===== Day 22: Data types and operators =====

// 1) string - text inside quotes (single, double, or backticks)
const fullName = "Dewi Lestari";
const greeting = 'Halo';
console.log(greeting, fullName);
console.log(typeof fullName); // "string"

// 2) number - integers and decimals (JS has no separate int/float)
const umur = 25;
const harga = 12.5;
console.log(typeof umur); // "number"

// 3) boolean - only true or false
const sudahMakan = true;
console.log(typeof sudahMakan); // "boolean"

// 4) null - "empty on purpose" (we set it ourselves)
const dataKosong = null;
console.log(dataKosong, typeof dataKosong); // null "object" (a famous JS quirk)

// 5) undefined - a variable that exists but has no value yet
let belumDiisi;
console.log(belumDiisi, typeof belumDiisi); // undefined "undefined"

// --- Arithmetic operators ---
console.log(7 + 3);  // 10  addition
console.log(7 - 3);  // 4   subtraction
console.log(7 * 3);  // 21  multiplication
console.log(7 / 2);  // 3.5 division
console.log(7 % 3);  // 1   remainder (modulo)
console.log(2 ** 3); // 8   power

// --- Comparison operators (the result is a boolean) ---
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 === 5); // true  (=== checks value AND type)
console.log(5 == "5");  // true  (== only checks value - avoid this)
console.log(5 === "5"); // false (different types)

// --- Logical operators ---
console.log(true && false); // false (AND - both must be true)
console.log(true || false); // true  (OR - at least one is true)
console.log(!true);         // false (NOT - flips the value)

// --- Template literals: use backticks and ${} to insert values ---
const kota = "Bandung";
const pesan = `Halo, nama saya ${fullName}. Saya tinggal di ${kota}.`;
console.log(pesan);

// Show a summary on the page
const output = document.getElementById("output");
output.textContent = pesan + ` Umur saya ${umur} tahun. 7 + 3 = ${7 + 3}.`;
