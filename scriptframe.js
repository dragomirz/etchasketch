//div generation
function RNG(){
  return Math.random() * 255;
}
let container = document.getElementById("mainFrame");
for(let i = 0;i < 16;i++){
  let div = document.createElement("div");
  div.className = "flex-item";
  div.addEventListener("mouseover", () => {
    
    div.style.backgroundColor = `rgb(${RNG()},${RNG()},${RNG()})`;
  });
  container.appendChild(div);
}
function changeBoard() {
  const gridSize = 500;
  let squarage = prompt("How many squares per side of square");
  let allGrids = document.querySelectorAll(".flex-item");
  allGrids.forEach(function(element) {
    element.remove();
  });
  let squareWidth = gridSize/squarage;
  let squareHeight = gridSize/squarage;
  for(let i = 0;i < squarage*squarage;i++){
    let div = document.createElement("div");
    div.className = "flex-item";
    div.style.width = squareWidth + "px";
    div.style.height = squareHeight + "px";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = `rgb(${RNG()},${RNG()},${RNG()})`;
    });
    container.appendChild(div);

  }
}
















//kogato se vurna:event listener, hove, change background color

