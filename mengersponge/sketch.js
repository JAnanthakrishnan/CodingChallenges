let sponge = [];
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  let b = new Box(0, 0, 0, 200);
  sponge.push(b);
}
function mouseClicked() {
  next = [];
  for (let sp of sponge) {
    newBoxes = sp.generate();
    for (let item of newBoxes) {
      next.push(item);
    }
  }
  sponge = next;
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  lights();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  for (let bo of sponge) {
    bo.show();
  }
}
