class Vehicle {
  constructor(p,col) {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.target = createVector(p.x, p.y);
    this.r = 8;
    this.maxSpeed = 10;
    this.maxForce = 1;
    this.col = col;
  }
  render() {
    stroke(this.col);
    strokeWeight(this.r);
    fill(255);
    point(this.pos.x, this.pos.y);
  }
  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }
  behaviours() {
    let arrive = this.arrive(this.target);
    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse);
    arrive.mult(1);
    flee.mult(4);
    this.applyForce(arrive);
    this.applyForce(flee);
  }
  applyForce(force) {
    this.acc.add(force);
  }
  flee(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    if (d < 100) {
      desired.setMag(this.maxSpeed);
      desired.mult(-1);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      return steer;
    } else return createVector(0, 0);
  }
  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    let speed = this.maxSpeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }
}
