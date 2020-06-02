let points = [];
let hull = [];
let buffer = 20;
let leftMost;
let currentVertex;
let index;
let nextVertex;
let done = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 200; i++) {
    let v = createVector(
      random(buffer, width - buffer),
      random(buffer, height - buffer)
    );
    points.push(v);
  }
  points.sort((a, b) => a.x - b.x);
  leftMost = points[0];
  currentVertex = leftMost;
  hull.push(currentVertex);
  nextVertex = points[1];
  index = 0;
  let nextIndex = -1;
}

function draw() {
  background(0);
  strokeWeight(10);
  stroke(255);
  for (let p of points) {
    point(p.x, p.y);
  }
  stroke(0,0,255);
  fill(0,0,255,50);
  beginShape();
  for (let p of hull) {
    vertex(p.x, p.y);
  }
  endShape();
  if(done){
      noLoop();
  }
  stroke(0, 255, 0);
  strokeWeight(20);
  point(leftMost.x, leftMost.y);
  stroke(0, 0, 255);
  strokeWeight(20);
  point(leftMost.x, leftMost.y);
  strokeWeight(3);
  stroke(0,255,0);
  line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);
  let checking = points[index];
  stroke(255);
  line(currentVertex.x, currentVertex.y, checking.x, checking.y);
  let a = p5.Vector.sub(nextVertex, currentVertex);
  let b = p5.Vector.sub(checking, currentVertex);
  let cross = a.cross(b);
  if (cross.z < 0) {
    nextVertex = checking;
    nextIndex = index;
  }
  index += 1;
  if (index === points.length) {
      if(nextVertex===leftMost){
            done = true;
      }
    hull.push(nextVertex);
    currentVertex = nextVertex;
    index = 0;
    nextVertex = leftMost;
  }
}
