let cities = [];
let totalCities = 4;
let recordDistance = 0;
let bestEver = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width - 20) + 10, random(height - 20) + 10);
    cities[i] = v;
  }
  let d = calcD(cities);
  recordDistance = d;
  bestEver = cities.slice();
}

function draw() {
  background(0);
  //frameRate(5);
  for (let city of cities) {
    fill(255);
    ellipse(city.x, city.y, 10, 10);
  }
  beginShape();
  noFill(255);
  stroke(255);
  for (let city of cities) vertex(city.x, city.y);
  endShape();
  beginShape();
  noFill(255);
  stroke(255, 0, 200);
  strokeWeight(4);
  for (let city of bestEver) vertex(city.x, city.y);
  endShape();
  let i = floor(random(cities.length));
  let j = floor(random(cities.length));
  swap(cities, i, j);
  let d = calcD(cities);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = cities.slice();
  }
}

function swap(a, i, j) {
  temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
function calcD(points) {
  let sum = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
    sum += d;
  }
  return sum;
}
