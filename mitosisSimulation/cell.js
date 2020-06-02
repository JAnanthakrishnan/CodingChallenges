class Cell {
  constructor(
    pos = createVector(random(80, width - 80), random(80, height - 80)),
    r = 80,
    c = color(random(100, 255), 0, random(100, 255))
  ) {
    this.pos = pos.copy();
    this.r = r;
    this.color = c;
  }
  move() {
    let vel = p5.Vector.random2D();
    this.pos.add(vel);
    // let x = random(-2,2);
    // let y = random(-2,2);
    // this.pos.x+=x;
    // this.pos.y+=y;
  }
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r);
  }
  isClicked(x, y) {
    let d = dist(x, y, this.pos.x, this.pos.y);
    if (d < this.r / 2) {
      return true;
    }
    return false;
  }
  mitosis() {
    this.pos.x += random(-this.r, this.r);
    let cellA = new Cell(this.pos, this.r * 0.8, this.color);
    return cellA;
  }
}
