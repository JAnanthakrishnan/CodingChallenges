let vehicles = [];
let colors = [];
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  vehicles = [];
  for (let i = 0; i < 200; i++) {
    let hu = map(i, 0, 200, 0, 255);
    colors[i] = color(hu, 255, 255);
    vehicles.push(new Vehicle(colors[i]));
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
  vehicles = [];
  for (let i = 0; i < 200; i++) {
    let hu = map(i, 0, 200, 0, 255);
    colors[i] = color(hu, 255, 255);
    vehicles.push(new Vehicle(colors[i]));
  }
}
function draw() {
//    let  t = floor(map(mouseX,0,width,0,200))
//   background(colors[t]);
    background(0)
  vehicles.forEach((vehicle) => {
    vehicle.render();
    vehicle.update();
    vehicle.behaviours();
    vehicle.move();
  });
}
