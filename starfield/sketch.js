let speed 
let stars = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 800; i++) {
    let star = new Star();
    stars.push(star);
  }
}
function draw() {
    speed = map(mouseX, 0, width, 10, 30)
  background(0);
  //translate(width/2, height/2)
  for (let star of stars) {
    star.show();
    star.update();
  }
}
