let cells = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  let cell = new Cell();
  cells.push(cell);
  cell = new Cell;
  cells.push(cell)
}
function draw() {
  background(51);
  for (let i = 0; i < cells.length; i++) {
    cells[i].show();
    cells[i].move();
  }
}
function mouseClicked(){
    for (let i = cells.length-1; i >=0; i--) {
        if(cells[i].isClicked(mouseX,mouseY)){
            cellA = cells[i].mitosis();
            cellB = cells[i].mitosis();
            cells.push(cellA);
            cells.push(cellB)
            cells.splice(i,1)
        }
      }
}
