function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  stroke(255);
  noFill();
  drawCircle(width/2,height/2,300)

}
function drawCircle(x,y,d){
    ellipse(x, y,d )
    if(d>2){
        drawCircle(x+d*0.5,y,d*0.5)
        drawCircle(x-d*0.5,y,d*0.5)
        // drawCircle(x,y+d*0.5,d*0.5)
    }
}
