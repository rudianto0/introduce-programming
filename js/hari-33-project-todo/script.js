// ===== Day 33: Mini Project - To-Do List =====
// Features: add, mark complete, delete, delete completed, and save to localStorage.

const form = document.querySelector("#form");
const input = document.querySelector("#inputTugas");
const daftar = document.querySelector("#daftarTugas");
const info = document.querySelector("#info");
const hapusSelesai = document.querySelector("#hapusSelesai");

// Our data is an array of objects. Each todo looks like: { teks, selesai }
let todos = [];

// --- Load saved data when the page opens ---
function muat() {
  const tersimpan = localStorage.getItem("daftarTodo");
  if (tersimpan) {
    todos = JSON.parse(tersimpan); // string -> array of objects
  }
}

// --- Save the current data ---
function simpan() {
  localStorage.setItem("daftarTodo", JSON.stringify(todos)); // array -> string
}

// --- Draw the list on the page ---
function render() {
  daftar.innerHTML = ""; // clear first, then rebuild

  todos.forEach(function (todo, index) {
    const li = document.createElement("li");
    li.className = "item";
    if (todo.selesai) li.classList.add("selesai");

    // Checkbox to toggle complete
    const cek = document.createElement("input");
    cek.type = "checkbox";
    cek.checked = todo.selesai;
    cek.addEventListener("change", function () {
      todos[index].selesai = cek.checked;
      simpan();
      render();
    });

    // The task text
    const span = document.createElement("span");
    span.textContent = todo.teks;

    // Delete button
    const hapus = document.createElement("button");
    hapus.textContent = "Hapus";
    hapus.addEventListener("click", function () {
      todos.splice(index, 1); // remove 1 item at this index
      simpan();
      render();
    });

    li.appendChild(cek);
    li.appendChild(span);
    li.appendChild(hapus);
    daftar.appendChild(li);
  });

  // Update the info line
  const selesai = todos.filter(function (t) { return t.selesai; }).length;
  info.textContent = `${todos.length} tugas, ${selesai} selesai`;
}

// --- Add a new todo ---
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const teks = input.value.trim();
  if (teks === "") return;

  todos.push({ teks: teks, selesai: false });
  input.value = "";
  input.focus();
  simpan();
  render();
});

// --- Delete all completed todos ---
hapusSelesai.addEventListener("click", function () {
  todos = todos.filter(function (t) { return !t.selesai; });
  simpan();
  render();
});

// --- Start the app ---
muat();
render();
