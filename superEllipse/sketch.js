let a = 500;
let b = 300;
let n = 4;
function setup() {
  createCanvas(windowWidth,windowHeight, 400);
  colorMode(HSB);
}
function draw() {
  background(0);
  strokeWeight(4);
    n = map(mouseX,0,width,0,2)
  translate(width / 2, height / 2);
//   for (n = 0.01; n < 2; n += 0.1) {
      let hu = map(n,0.01,2,0,255);
    noFill();
    stroke(hu,255,255)
    let fact = 2 / n;
    beginShape();
    for (let ang = 0; ang < TWO_PI; ang += 0.1) {
      let x = pow(abs(cos(ang)), fact) * a * sign(cos(ang));
      let y = pow(abs(sin(ang)), fact) * b * sign(sin(ang));
      vertex(x, y);
    }
    endShape(CLOSE);
//   }
if(mouseIsPressed){
      for (n = 0.01; n < 2; n += 0.1) {
        let hu = map(n,0.01,2,0,255);
        noFill();
        stroke(hu,255,255)
        let fact = 2 / n;
        beginShape();
        for (let ang = 0; ang < TWO_PI; ang += 0.1) {
          let x = pow(abs(cos(ang)), fact) * a * sign(cos(ang));
          let y = pow(abs(sin(ang)), fact) * b * sign(sin(ang));
          vertex(x, y);
        }
        endShape(CLOSE);
      }
}
}

function sign(a) {
  if (a === 0) return 0;
  else if (a < 0) return -1;
  else return 1;
}
