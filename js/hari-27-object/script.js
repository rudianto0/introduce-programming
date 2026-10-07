// ===== Day 27: Objects =====

// An object stores data as key: value pairs inside curly braces.
const siswa = {
  nama: "Rudi",
  umur: 18,
  kelas: "12 IPA",
  hobi: ["membaca", "coding"],
  alamat: {                    // nested object
    kota: "Jakarta",
    kodePos: "12345"
  },
  perkenalan: function () {    // a method = a function inside an object
    return `Nama saya ${this.nama}, umur ${this.umur}.`;
  }
};

// --- Dot notation (most common) ---
console.log(siswa.nama);
console.log(siswa.perkenalan());

// --- Bracket notation (use when the key is dynamic or has spaces) ---
const kunci = "kelas";
console.log(siswa[kunci]); // "12 IPA"

// --- Nested object access ---
console.log(siswa.alamat.kota); // "Jakarta"
console.log(siswa.hobi[0]);     // "membaca"

// --- Destructuring: unpack values into variables ---
const { nama, umur } = siswa;
console.log(nama, umur);

// --- Object.keys and Object.values ---
console.log(Object.keys(siswa));            // list of keys
console.log(Object.values({ a: 1, b: 2 })); // [1, 2]

// On-page output
const output = document.getElementById("output");
output.textContent = `${siswa.perkenalan()} Saya tinggal di ${siswa.alamat.kota}.`;
