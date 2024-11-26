const table = document.getElementById("myTable");
let number = 1;

for (let i = 0; i < 6; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 6; j++) {
    const cell = row.insertCell();
    cell.textContent = number++;
    cell.dataset.row = i;
    cell.dataset.col = j;
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorAlternateRows(cell, color) {
  const startRow = parseInt(cell.dataset.row);
  table.querySelectorAll("td").forEach((c) => {
    const row = parseInt(c.dataset.row);
    if ((row - startRow) % 2 === 0 && row >= startRow) {
      c.style.backgroundColor = color;
    }
  });
}

table.querySelectorAll("td").forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = getRandomColor();
  });

  cell.addEventListener("click", () => {
    const colorPicker = document.getElementById("colorPicker");
    cell.style.backgroundColor = colorPicker.value;
  });

  cell.addEventListener("dblclick", () => {
    const colorPicker = document.getElementById("colorPicker");
    colorAlternateRows(cell, colorPicker.value);
  });
});
