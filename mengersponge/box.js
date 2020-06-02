class Box {
  constructor(x, y, z, r) {
    this.position = createVector(x, y, z);
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
  }
  show() {
    push();
    translate(this.x, this.y, this.z);
    fill(255);
    noStroke();
    box(this.r);
    pop();
  }
  generate() {
    let boxes = [];
    let b;
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {
          let newR = this.r / 3;
          let sum = abs(x) + abs(y) + abs(z);
          if (sum > 1) {
            b = new Box(
              this.x + x * newR,
              this.y + y * newR,
              this.z + z * newR,
              newR
            );
            boxes.push(b);
          }
        }
      }
    }
    return boxes;
  }
}
