let x = 0;
let y = 0;
let spacing = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  strokeWeight(4);
  let r = random(1);
  if (r < 0.5) {
    //   fill(0)
    // rect(x, y, spacing, spacing);
    line(x,y,x+spacing,y+spacing);
  }
  else 
  line(x+spacing,y,x,y+spacing);
  
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
  if (y > height) {
    noLoop();
  }
}
