class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-2000, -50);
    this.z = random(0, 20);
    this.yspeed = map(this.z, 0, 20, 10, 4);
    this.size = map(this.z,0,20,3,1)
    this.len = map(this.z, 0, 20, 20, 10);
  }
  fall() {
    this.y = this.y + this.yspeed;
    let grav = map(this.z,0,20,0.2,0.01)
    this.yspeed += grav;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 10, 4);
    }
  }

  show() {
    stroke(138, 43, 226);
    strokeWeight(this.size)
    line(this.x, this.y, this.x, this.y + this.len);
  }
}
