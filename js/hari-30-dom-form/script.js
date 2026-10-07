// ===== Day 30: Building a list from a form =====

const form = document.querySelector("#form");
const input = document.querySelector("#inputItem");
const daftar = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const output = document.querySelector("#output");

// Show the "list is empty" message when there are no items, and update the count
function updateInfo() {
  kosong.style.display = daftar.children.length === 0 ? "block" : "none";
  output.textContent = `Jumlah item: ${daftar.children.length}`;
}

// fire when the form is submitted (button click or Enter)
form.addEventListener("submit", function (event) {
  event.preventDefault(); // do not reload the page

  const teks = input.value.trim(); // trim removes spaces at the start/end
  if (teks === "") {
    alert("Tulis dulu isi itemnya!");
    return; // stop here if the input is empty
  }

  // 1) Create a new <li>
  const li = document.createElement("li");
  li.textContent = teks;

  // 2) Create a delete button for this item
  const hapus = document.createElement("button");
  hapus.textContent = "Hapus";
  hapus.addEventListener("click", function () {
    li.remove(); // remove this <li> from the DOM
    updateInfo();
  });

  // 3) Put the button inside the <li>, then add the <li> to the <ul>
  li.appendChild(hapus);
  daftar.appendChild(li);

  input.value = "";
  input.focus(); // put the cursor back in the input
  updateInfo();
});

// run once when the page loads
updateInfo();
