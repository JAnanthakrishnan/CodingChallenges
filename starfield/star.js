class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }
  show() {
    let sx = map(this.x / this.z, -1, 1, 0, width);
    let sy = map(this.y / this.z, -1, 1, 0, height);
    // let r = map(this.r / this.z, 0, 1, 0, width);
    let px = map(this.x / this.pz, -1, 1, 0, width);
    let py = map(this.y / this.pz, -1, 1, 0, height);
    this.pz = this.z;
    let r = map(this.z,0,width,16,0)
    fill(255);
    noStroke();
    ellipse(sx, sy, r);
    stroke(255);
    line(px, py, sx, sy);
  }
  update() {
    this.z -= speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }
}
