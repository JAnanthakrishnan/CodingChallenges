class Cell {
  constructor(i, j, cellSize) {
    this.i = i;
    this.j = j;
    this.cellSize = cellSize;
    this.walls = [true, true, true, true];
    this.visited = false;
  }
  show() {
    stroke(255);
    let w = this.cellSize;
    let x = this.i * w;
    let y = this.j * w;
    if (this.walls[0]) line(x, y, x + w, y);
    if (this.walls[1]) line(x + w, y, x + w, y + w);
    if (this.walls[2]) line(x + w, y + w, x, y + w);
    if (this.walls[3]) line(x, y + w, x, y);
    if (this.visited) {
      fill(0, 255, 0, 100);
      noStroke();
      rect(x, y, w, w);
    }
  }
  index(i, j) {
    if (i < 0 || i > cols - 1 || j < 0 || j > rows - 1) {
      return -1;
    }
    return i + j * cols;
  }
  highlight() {
    let w = this.cellSize;
    let x = this.i * w;
    let y = this.j * w;
    fill(200, 0, 200, 100);
    noStroke();
    rect(x, y, w, w);
  }
  checkNeighbours() {
    let neighbours = [];
    let i = this.i;
    let j = this.j;
    let top = grid[this.index(i, j - 1)];
    let right = grid[this.index(i + 1, j)];
    let bottom = grid[this.index(i, j + 1)];
    let left = grid[this.index(i - 1, j)];
    if (top && !top.visited) {
      neighbours.push(top);
    }
    if (right && !right.visited) {
      neighbours.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbours.push(bottom);
    }
    if (left && !left.visited) {
      neighbours.push(left);
    }
    if (neighbours.length > 0) {
      let index = floor(random(0, neighbours.length));
      return neighbours[index];
    } else return undefined;
  }
}
