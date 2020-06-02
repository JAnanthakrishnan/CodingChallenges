class Rocket {
  constructor(dna) {
    this.pos = createVector(width / 2, height);
    this.vel = createVector();
    this.acc = createVector();
    if (dna) this.dna = dna;
    else this.dna = new DNA();
    this.fitness;
    this.completed = false;
    this.crashed = false;
    //  this.count =0;
  }
  applyForce(force) {
    this.acc.add(force);
  }
  update() {
    let d = dist(this.pos.x, this.pos.y, target.x, target.y);
    if (d < 10) {
      this.completed = true;
      this.fitness *= 5;
    }
    if (
      (this.pos.x > rx &&
        this.pos.x < rx + rw &&
        this.pos.y > ry &&
        this.pos.y < ry + rh) ||
      this.pos.y < 0
    ) {
      this.crashed = true;
      this.fitness /= 5;
    }
    this.applyForce(this.dna.genes[count]);
    if (!this.completed && !this.crashed) {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.mult(0);
      this.vel.limit(4);
    }
  }
  show() {
    push();
    noStroke();
    fill(255, 150);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 25, 5);
    pop();
  }
  calcFitness() {
    let d = dist(this.pos.x, this.pos.y, target.x, target.y);
    this.fitness = 1 / d;
    this.fitness = pow(this.fitness, 2);
  }
}
