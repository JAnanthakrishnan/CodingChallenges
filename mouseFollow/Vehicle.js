class Vehicle {
    constructor(col) {
      this.pos = createVector(random(width), random(height));
      this.vel = p5.Vector.random2D();
      this.acc = createVector();
      this.target = createVector(mouseX,mouseY);
      this.r = 8;
      this.maxSpeed = 10;
      this.maxForce = 10;
      this.col = col;
    }
    render() {
      stroke(this.col);
      strokeWeight(this.r);
      fill(255);
      point(this.pos.x, this.pos.y);
    }
    update() {
      this.target = createVector(mouseX,mouseY)
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.mult(0);
    }
    move(){
      this.vel.add(createVector(random(-10,10),random(-10,10)))
    }
    behaviours() {
      let arrive = this.arrive(this.target);
      arrive.mult(1);
      this.applyForce(arrive);
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
  