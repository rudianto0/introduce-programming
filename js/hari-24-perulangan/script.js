// ===== Day 24: Loops =====

// --- for loop: use when we know how many times to repeat ---
for (let i = 1; i <= 5; i++) {
  console.log("for:", i);
}

// --- while loop: repeat while a condition is true ---
let hitungan = 5;
while (hitungan > 0) {
  console.log("while:", hitungan);
  hitungan--; // IMPORTANT: without this, the loop never ends (infinite loop)
}

// --- do...while: runs the body at least once, then checks the condition ---
let n = 0;
do {
  console.log("do-while:", n);
  n++;
} while (n < 0); // condition is false, but the body ran once anyway

// --- for...of: loop over the items of an array directly ---
const buah = ["apel", "jeruk", "mangga"];
for (const item of buah) {
  console.log("buah:", item);
}

// --- forEach: run a function for each array item ---
buah.forEach(function (item, index) {
  console.log(`forEach index ${index}: ${item}`);
});

// Build a list on the page using a loop
const output = document.getElementById("output");
let daftar = "";
for (const item of buah) {
  daftar += `<li>${item}</li>`;
}
output.innerHTML = `<ul>${daftar}</ul>`;
