let order = [];
let x = -1;
let y = -1;
let cities = [];
let totalCities = 5;
let noChecks ;
let recordDistance = 0;
let bestOrder = [];
let counter = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < totalCities; i++) {
    order.push(i);
  }
  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width - 20) + 10, random(height/2 - 20) + 10);
    cities[i] = v;
  }
  let d = calcD(cities, order);
  recordDistance = d;
  bestOrder = order.slice();
  noChecks = factorial(totalCities)
  console.log(noChecks)
}
function nextP(order) {
  for (let i = 0; i < order.length - 1; i++) {
    if (order[i] < order[i + 1]) {
      x = i;
    }
  }
  if (x === -1) {
    console.log("No more permutations");
    return null;
  }
  for (let j = x; j < order.length; j++) {
    if (order[j] > order[x]) {
      y = j;
    }
  }

  let temp = order.slice(order);
  swap(temp, x, y);
  order = rev(temp, x + 1);
  x = -1;
  return order;
}
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
function rev(arr, p) {
  let b = arr.slice(p);
  b = reverse(b);
  let c = arr.slice(0, p);
  let d = c.concat(b);
  return d;
}
function draw() {
    counter++;
  background(0);
  let pComplete = counter/noChecks*100
  text(`${pComplete} %`,width/2,height/2)
  for (let city of cities) {
    fill(255);
    ellipse(city.x, city.y, 10, 10);
  }
  beginShape();
  noFill(255);
  stroke(255, 0, 200);
  strokeWeight(4);
  for (let i = 0; i < bestOrder.length; i++) {
    let n = bestOrder[i];
    vertex(cities[n].x, cities[n].y);
  }
  endShape();
  translate(0, height/2)
  for (let city of cities) {
    fill(255);
    ellipse(city.x, city.y, 10, 10);
  }
  beginShape();
  noFill(255);
  stroke(255);
  strokeWeight(1)
  for (let i = 0; i < order.length; i++) {
    let n = order[i];
    vertex(cities[n].x, cities[n].y);
  }
  endShape();
  order = nextP(order);
  if (order === null) {
    noLoop();
  }
  if (order) {
    let d = calcD(cities, order);
    if (d < recordDistance) {
      recordDistance = d;
      bestOrder = order.slice();
    }
  }
}
function calcD(points, order) {
  let sum = 0;
  for (let i = 0; i < order.length - 1; i++) {
    let d = dist(
      points[order[i]].x,
      points[order[i]].y,
      points[order[i + 1]].x,
      points[order[i + 1]].y
    );
    sum += d;
  }
  return sum;
}
function factorial(n){
    fact = 1;
    for(let i=2;i<=n;i++){
        fact*=i;
    }
    return fact;
}