let rows, cols;
let scl = 20;
let terrain = [];
let w;
let h;
let flying = 0
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  w = width*2;
  h = height*2;
  cols = w / scl;
  rows = h / scl;
}
function draw() {
    let xoff = 0;
  for(let x = 0;x<cols;x++){
      let yoff = flying;
      terrain[x] = [];
      for(let y = 0;y<rows;y++){
        terrain[x][y] = map(noise(xoff,yoff),0,1,-150,150);
        yoff+=0.1;
    } 
    xoff+=0.1
  }
  background(0);

  rotateX(PI/3)
  translate(-w / 2, -h / 2,width/10);
  for (let y = 0; y < rows-1; y++) {
    fill(200, 200, 200, 50);
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x * scl, y * scl,terrain[x][y]);
      vertex(x * scl, (y + 1) * scl,terrain[x][y+1]);
      
    }
    endShape();
  }
  flying-=0.1
}
