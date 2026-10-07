// ===== Day 28: DOM Basics =====
// The DOM (Document Object Model) is the browser's tree of your HTML.
// JavaScript can read and change every part of it.

const judul = document.querySelector("#judul");
const deskripsi = document.querySelector("#deskripsi");
const kotak = document.querySelector("#kotak");
const tautan = document.querySelector("#tautan");

// textContent: read or change ONLY the text
console.log("Judul awal:", judul.textContent);
deskripsi.textContent = "Teks ini sudah diubah oleh JavaScript!";

// innerHTML: change the HTML inside an element (it can add tags)
kotak.innerHTML = "Saya kotak dengan <b>teks tebal</b>.";

// style: change CSS directly from JavaScript
kotak.style.backgroundColor = "#ffe9a8";
kotak.style.padding = "12px";
kotak.style.borderRadius = "8px";

// classList: add / remove / toggle CSS classes
kotak.classList.add("aktif");
console.log("classList:", kotak.classList);

// setAttribute / getAttribute
tautan.setAttribute("href", "https://developer.mozilla.org");
tautan.setAttribute("target", "_blank");
console.log("href:", tautan.getAttribute("href"));
tautan.textContent = "Belajar lebih lanjut di MDN";

// Count paragraphs dynamically
const semuaParagraf = document.querySelectorAll("p");
document.querySelector("#jumlah").textContent = semuaParagraf.length;

document.querySelector("#output").textContent =
  "DOM sudah diubah: judul, deskripsi, kotak, tautan, dan jumlah paragraf.";
