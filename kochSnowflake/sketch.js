let count = 0;
let a;
let sq;
let points = [];
let val = -1;
function setup() {
  a = 200;
  sq = sqrt(3);
  createCanvas(windowWidth, windowHeight);
  let x = width/2-a;
  let y = height/2+a/2;
  points.push(createVector(x, y));
  points.push(createVector(x + a, y - a * sq));
  points.push(createVector(x + 2 * a, y));
}
function draw() {
  background(200)
  strokeWeight(2);
  stroke(0)
  noFill(255)
  beginShape();
  for (let p of points) {
    vertex(p.x, p.y);
  }
  vertex(points[0].x, points[0].y);
  endShape();
  noStroke()
  fill(0)
  textSize(16)
  text("Click on screen to generate snow flake", width/2-150,height-10)
}
function mouseClicked() {
  let temp = points.slice();
  let index = 1;
  for (let i = 0; i < temp.length; i++, index += 4) {
    if (i === temp.length - 1) {
      generatePoints(temp[i], temp[0]);
    } else generatePoints(temp[i], temp[i + 1], index);
  }
}
function generatePoints(v1, v2, index) {
  let x1 = v1.x;
  let x2 = v2.x;
  let y1 = v1.y;
  let y2 = v2.y;
  let x3 = (x2 + 2 * x1) / 3;
  let y3 = (y2 + 2 * y1) / 3;
  let newV1 = createVector(x3, y3);
  let x4 = (x1 + 2 * x2) / 3;
  let y4 = (y1 + 2 * y2) / 3;
  let newV2 = createVector(x4, y4);
  let side = dist(x3, y3, x4, y4);
  let d = (side * sq) / 2;
  let midx = (x3 + x4) / 2;
  let midy = (y3 + y4) / 2;
  let m = (x3 - x4) / (y4 - y3);
  let r = sqrt(1 / (1 + m * m));
  let x5;
  let y5;
  let x6;
  let y6;
  let Vec1, Vec2;
  let newV3;
  if (m === -Infinity) {
    x5 = midx;
    y5 = midy - d;
    newV3 = createVector(x5, y5);
  } else if (m === Infinity) {
    x5 = midx;
    y5 = midy + d;
    newV3 = createVector(x5, y5);
  } else {
    x5 = midx - d * r;
    y5 = midy - m * d * r;
    Vec1 = createVector(x5, y5);
    x6 = midx + d * r;
    y6 = midy + m * d * r;
    Vec2 = createVector(x6, y6);
    let a = p5.Vector.sub(Vec1, newV1);
    let b = p5.Vector.sub(Vec2, newV1);
    let cross = a.cross(b);
    if (cross.z < 0) {
      newV3 = Vec2;
    } else {
      newV3 = Vec1;
    }
  }

  //let newV3 = createVector(x5, y5);
  points.splice(index, 0, newV1, newV3, newV2);
}
