// ===== Day 32: fetch and async/await =====
// NOTE: This lesson needs an internet connection.
// We fetch data from https://jsonplaceholder.typicode.com

const tombol = document.querySelector("#muat");
const status = document.querySelector("#status");
const daftar = document.querySelector("#daftar");
const output = document.querySelector("#output");

// A Promise is a "future value". fetch() returns a Promise.
// async/await lets us wait for it in a readable way.

async function muatPengguna() {
  try {
    status.textContent = "Memuat data...";
    daftar.innerHTML = "";

    // 1) Request the data (await waits for the Promise)
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // 2) fetch only fails on network errors, so check response.ok manually
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 3) Convert the response body to JSON (also asynchronous)
    const pengguna = await response.json();
    console.log(pengguna); // an array of user objects

    // 4) Render the results
    pengguna.forEach(function (user) {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      daftar.appendChild(li);
    });

    status.textContent = `Berhasil memuat ${pengguna.length} pengguna.`;
    output.textContent = "Data berhasil ditampilkan di daftar.";
  } catch (error) {
    status.textContent = "Gagal memuat data. Periksa koneksi internetmu.";
    output.textContent = "Terjadi kesalahan. Lihat Console untuk detailnya.";
    console.error("Error:", error);
  }
}

tombol.addEventListener("click", muatPengguna);
