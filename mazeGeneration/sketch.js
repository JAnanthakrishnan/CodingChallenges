let grid = [];
let stack = [];
let cellSize = 20;
let current;
let rows;
let cols;
function setup() {
  //frameRate(5);
  createCanvas(windowWidth, windowHeight);
  rows = floor(height / cellSize);
  cols = floor(width / cellSize);

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i, j, cellSize);
      grid.push(cell);
    }
  }
  current = grid[0];
}
function draw() {
  background(51);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }
  current.visited = true;
  let next = current.checkNeighbours();
  if (next) {
      stack.push(current)
    removeWalls(next, current);
    next.visited = true;
    current = next;
  }
  else if(stack.length>0){
      let next = stack.pop();
      current = next
  }
  current.highlight();
}
function removeWalls(next, current) {
  if (current.i - next.i === -1) {
    current.walls[1] = false;
    next.walls[3] = false;
  }
  if (current.i - next.i === 1) {
    current.walls[3] = false;
    next.walls[1] = false;
  }
  if (current.j - next.j === -1) {
    current.walls[2] = false;
    next.walls[0] = false;
  }
  if (current.j - next.j === 1) {
    current.walls[0] = false;
    next.walls[2] = false;
  }
}
