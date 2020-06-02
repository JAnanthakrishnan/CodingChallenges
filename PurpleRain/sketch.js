let d = [];
let noDrops = 500;
let t = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < noDrops; i++) {
    d[i] = new Drop();
  }
}
function draw() {
  background(230, 230, 250);
  for (let i = 0; i < d.length; i++) {
    d[i].show();
    d[i].fall();
  }
  t++;
}
