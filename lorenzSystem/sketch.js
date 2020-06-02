let x = 0.01;
let y = 0;
let z = 0;
let a = 10;
let b = 28;
let c = 8 / 3;
let points = [];
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  colorMode(HSB);
}
function draw() {
  background(0)
  let dt = 0.01;

  let dx = a * (y - x) * dt;
  let dy = (x * (b - z) - y) * dt;
  let dz = (x * y - c * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  points.push(createVector(x,y,z));
  translate(0, 0, -80);
  //camera effects
  let camX = map(mouseX, 0, width, -800, 800);
  let camY = map(mouseY, 0, height, -800,800);
  camera(camX, camY, height / 2.0 / tan((PI * 30.0) / 180.0), 0, 0, 0, 0, 1, 0);
  noFill();
  scale(6);
  strokeWeight(2)
  let hu = 0;
  for (let i =0;i<points.length-1;i++) {
    stroke(hu, 255, 255);
    line(points[i].x,points[i].y,points[i].z,points[i+1].x,points[i+1].y,points[i+1].z)
    hu += 0.5;
    if (hu > 255) {
      hu = 0;
    }
  }

}
