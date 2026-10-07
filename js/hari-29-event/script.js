// ===== Day 29: Events =====
// An event is something the user does: click, type, select, submit...

// --- click ---
const tombol = document.querySelector("#tombol");
const hasilKlik = document.querySelector("#hasilKlik");
let jumlahKlik = 0;

tombol.addEventListener("click", function () {
  jumlahKlik++;
  hasilKlik.textContent = `Tombol diklik ${jumlahKlik} kali.`;
});

// --- input: fires every time the text changes ---
const inputNama = document.querySelector("#inputNama");
const hasilInput = document.querySelector("#hasilInput");

inputNama.addEventListener("input", function (event) {
  // event.target is the element that triggered the event
  console.log("event.target.value:", event.target.value);
  hasilInput.textContent = `Input: ${event.target.value}`;
});

// --- change: fires when a value is committed (e.g. a select) ---
const pilihWarna = document.querySelector("#pilihWarna");
const hasilChange = document.querySelector("#hasilChange");

pilihWarna.addEventListener("change", function (event) {
  hasilChange.textContent = `Perubahan: ${event.target.value}`;
});

// --- submit: fires when a form is submitted ---
const form = document.querySelector("#form");
const hasilSubmit = document.querySelector("#hasilSubmit");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading
  const email = document.querySelector("#email").value;
  hasilSubmit.textContent = `Email terkirim: ${email}`;
  form.reset();
});

document.querySelector("#output").textContent =
  "Coba klik tombol, ketik di input, pilih warna, lalu kirim form. Lihat Console juga.";
