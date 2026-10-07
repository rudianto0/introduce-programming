// ===== Day 31: localStorage =====
// localStorage stores text in the browser and keeps it even after refresh/close.
// It ONLY stores strings, so we use JSON for objects and arrays.

const input = document.querySelector("#inputNama");
const simpan = document.querySelector("#simpan");
const tampil = document.querySelector("#tampil");
const hapus = document.querySelector("#hapus");
const output = document.querySelector("#output");

// setItem(key, value)
simpan.addEventListener("click", function () {
  const nama = input.value.trim();
  if (!nama) return;
  localStorage.setItem("namaPengguna", nama);
  output.textContent = `Disimpan: ${nama}`;
});

// getItem(key) -> returns null if the key does not exist
tampil.addEventListener("click", function () {
  const nama = localStorage.getItem("namaPengguna");
  output.textContent = nama === null ? "Belum ada data." : `Data tersimpan: ${nama}`;
});

// removeItem(key)
hapus.addEventListener("click", function () {
  localStorage.removeItem("namaPengguna");
  output.textContent = "Data dihapus.";
});

// --- Storing objects with JSON ---
const contoh = { nama: "Budi", umur: 20 };
localStorage.setItem("profil", JSON.stringify(contoh)); // object -> string

const stringTersimpan = localStorage.getItem("profil");
const objek = JSON.parse(stringTersimpan); // string -> object
console.log("Hasil JSON.parse:", objek);
console.log("Nama:", objek.nama);

// Show existing data when the page opens
const namaTersimpan = localStorage.getItem("namaPengguna");
if (namaTersimpan) {
  output.textContent = `Selamat datang kembali, ${namaTersimpan}!`;
} else {
  output.textContent = "Buka Console untuk melihat contoh JSON. Silakan simpan namamu.";
}
