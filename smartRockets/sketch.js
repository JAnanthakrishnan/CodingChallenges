let p;
let lifespan = 300;
let lifeP;
let target;
let count = 0;
let rw;
let rh; 
let rx;
let ry;
function setup() {
  createCanvas(400, 400);
  rw = 200;
  rh = 10;
  rx = width / 2 - rw / 2;
  ry = height / 2;
  lifeP = createP("");
  maxFit = createP("");
  p = new Population();
  target = createVector(width / 2, 50);
}
function draw() {
  background(0);
  fill(255);
  ellipse(target.x, target.y, 20);
  fill(255, 0, 0);
  rect(rx, ry, rw, rh);
  p.run();
  lifeP.html(count);
  count++;
  if (count > lifespan) {
    count = 0;
    p.evaluate();
    p.selection();
  }
}
