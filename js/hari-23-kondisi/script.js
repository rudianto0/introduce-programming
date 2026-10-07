// ===== Day 23: Conditions =====

// The "if" statement runs a block only when the condition is true.
const nilai = 78;
let grade;

if (nilai >= 90) {
  grade = "A";
} else if (nilai >= 80) {
  grade = "B";
} else if (nilai >= 70) {
  grade = "C";
} else {
  grade = "D";
}
console.log("Nilai:", nilai, "Grade:", grade);

// --- switch: compares ONE value against many exact cases ---
const hari = "Senin";

switch (hari) {
  case "Sabtu":
  case "Minggu":
    console.log("Hari libur!");
    break; // "break" stops the switch from falling through
  case "Senin":
    console.log("Awal minggu, semangat!");
    break;
  default:
    console.log("Hari biasa.");
}

// --- Ternary operator: a short if/else that returns a value ---
const umur = 17;
const status = umur >= 17 ? "Boleh membuat SIM" : "Belum boleh membuat SIM";
console.log(status);

// --- Truthy and falsy ---
// These values are "falsy": false, 0, "", null, undefined, NaN.
// Everything else is "truthy".
const nama = "Rina";
if (nama) {
  console.log("Nama tidak kosong");
}

// On-page output
const output = document.getElementById("output");
output.textContent = `Nilai ${nilai} mendapat grade ${grade}. Status: ${status}. Hari: ${hari}.`;
