// ===== Day 34: Final Integration Project - Mini Quiz =====
// Combines: variables, arrays, objects, functions, DOM, events, and localStorage.

// Array of objects: each question has a list of choices and the correct index.
const soalList = [
  { tanya: "Apa ibu kota Indonesia?", pilihan: ["Bandung", "Jakarta", "Surabaya"], jawaban: 1 },
  { tanya: "Berapa hasil 7 x 8?", pilihan: ["48", "56", "64"], jawaban: 1 },
  { tanya: "Manakah yang BUKAN tipe data JavaScript?", pilihan: ["string", "number", "array"], jawaban: 2 }
];

let indexSoal = 0;
let skor = 0;
let sudahDijawab = false;

const elTanya = document.querySelector("#tanya");
const elPilihan = document.querySelector("#pilihan");
const elInfo = document.querySelector("#info");
const elHasil = document.querySelector("#hasil");
const elSkorTerbaik = document.querySelector("#skorTerbaik");

// Show the best score saved in localStorage
function tampilkanSkorTerbaik() {
  const terbaik = localStorage.getItem("skorTerbaik");
  elSkorTerbaik.textContent = terbaik ? `Skor terbaikmu: ${terbaik} / ${soalList.length}` : "";
}

// Draw the current question and its choices
function tampilkanSoal() {
  sudahDijawab = false;
  const soal = soalList[indexSoal];

  elTanya.textContent = `Soal ${indexSoal + 1}/${soalList.length}: ${soal.tanya}`;
  elInfo.textContent = `Skor saat ini: ${skor}`;
  elPilihan.innerHTML = "";

  soal.pilihan.forEach(function (teksPilihan, i) {
    const tombol = document.createElement("button");
    tombol.textContent = teksPilihan;

    tombol.addEventListener("click", function () {
      if (sudahDijawab) return; // only allow one answer per question
      sudahDijawab = true;

      // Disable all buttons so the answer cannot change
      Array.from(elPilihan.children).forEach(function (btn) {
        btn.disabled = true;
      });

      if (i === soal.jawaban) {
        skor++;
        tombol.classList.add("benar");
        elHasil.textContent = "Benar!";
      } else {
        tombol.classList.add("salah");
        elHasil.textContent = "Salah.";
      }

      // Always reveal the correct answer
      elPilihan.children[soal.jawaban].classList.add("benar");

      // Move to the next question after a short delay
      setTimeout(function () {
        indexSoal++;
        elHasil.textContent = "";
        if (indexSoal < soalList.length) {
          tampilkanSoal();
        } else {
          selesai();
        }
      }, 900);
    });

    elPilihan.appendChild(tombol);
  });
}

// Show the final result and save the best score
function selesai() {
  elTanya.textContent = "Kuis selesai!";
  elPilihan.innerHTML = "";
  elInfo.textContent = `Skor akhir: ${skor} dari ${soalList.length}`;

  const terbaik = Number(localStorage.getItem("skorTerbaik")) || 0;
  if (skor > terbaik) {
    localStorage.setItem("skorTerbaik", String(skor));
    elHasil.textContent = "Skor terbaik baru!";
  } else {
    elHasil.textContent = `Skor terbaikmu masih ${terbaik}.`;
  }
  tampilkanSkorTerbaik();

  // Play again button
  const ulang = document.createElement("button");
  ulang.textContent = "Main lagi";
  ulang.addEventListener("click", function () {
    indexSoal = 0;
    skor = 0;
    elHasil.textContent = "";
    elInfo.textContent = "";
    tampilkanSoal();
  });
  elPilihan.appendChild(ulang);
}

// Start the app
tampilkanSkorTerbaik();
tampilkanSoal();
