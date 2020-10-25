let vehicles = [];
let colors = [];
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  let i = 0;
  vehicles = [];
  let points = font.textToPoints('p5.js', 10, height / 2, 100);
  points.forEach((p) => {
    let hu = map(i, 0, points.length, 0, 255);
    colors[i] = color(hu, 255, 255);
    vehicles.push(new Vehicle(p, colors[i]));
    i++;
  });
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  textFont(font);
  let i = 0;
  let points = font.textToPoints('.js', 10, height / 2, 100);
  points.forEach((p) => {
    let hu = map(i, 0, points.length, 0, 255);
    colors[i] = color(hu, 255, 255);
    vehicles.push(new Vehicle(p, colors[i]));
    i++;
  });
}
function draw() {
  background(0);
  vehicles.forEach((vehicle) => {
    vehicle.render();
    vehicle.update();
    vehicle.behaviours();
  });
}
