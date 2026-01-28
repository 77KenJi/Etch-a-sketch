
let color = "black";
function populateContainer(size) {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    container.style.backgroundColor = "#e0e0e0";
    square.addEventListener("mouseover", colorSquare);
    container.insertAdjacentElement("beforeend", square);
  }
}
populateContainer(16);

function changeSize(input) {
  input >= 2 && input <= 100 ? populateContainer(input) : console.log("input error! to many or to few squares");
};


function colorSquare() {
  color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
}

function changeColor(choice) {
  color = choice;
}

function resetContainer() {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));
}
function promptNewSize() {
  let input = prompt("Enter number of squares per side (2–100):");

  let size = Number(input);

  if (size >= 2 && size <= 100) {
    populateContainer(size);
  } else {
    alert("Please enter a number between 2 and 100.");
  }
}
