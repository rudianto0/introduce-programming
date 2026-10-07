// ===== Day 26: Arrays =====

// An array is an ordered list of values inside square brackets.
const angka = [10, 20, 30, 40, 50];
console.log(angka);
console.log("Panjang array:", angka.length); // 5

// Access items by index (the index starts at 0)
console.log("Item pertama:", angka[0]);

// --- Adding and removing items ---
const antrian = ["A", "B"];
antrian.push("C");      // add to the END
antrian.unshift("Z");   // add to the START
console.log(antrian);   // ["Z", "A", "B", "C"]

antrian.pop();          // remove from the END   -> "C"
antrian.shift();        // remove from the START -> "Z"
console.log(antrian);   // ["A", "B"]

// --- map: transform every item, returns a NEW array ---
const dikaliDua = angka.map(function (item) {
  return item * 2;
});
console.log("map:", dikaliDua); // [20, 40, 60, 80, 100]

// --- filter: keep only the items that pass a test ---
const besar = angka.filter(function (item) {
  return item > 25;
});
console.log("filter:", besar); // [30, 40, 50]

// --- find: get the FIRST item that passes a test ---
const ketemu = angka.find(function (item) {
  return item > 25;
});
console.log("find:", ketemu); // 30

// --- includes: check if a value exists (true/false) ---
console.log("includes 30?", angka.includes(30)); // true
console.log("includes 99?", angka.includes(99)); // false

// --- join: combine items into one string ---
console.log("join:", angka.join(" - ")); // "10 - 20 - 30 - 40 - 50"

// On-page output
const output = document.getElementById("output");
output.textContent = "Angka > 25: " + besar.join(", ");
