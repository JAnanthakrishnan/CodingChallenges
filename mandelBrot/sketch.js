const maxiterations = 5000;
const colorsRed = [];
const colorsGreen = [];
const colorsBlue = [];

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1);

  for (let n = 0; n < maxiterations; n++) {
    let hu = sqrt(n / maxiterations);
    let col = color(hu, 255, 150);
    colorsRed[n] = red(col);
    colorsGreen[n] = green(col);
    colorsBlue[n] = blue(col);
  }
}

function draw() {


  background(255);

  let w = 5;
  let h = (w * height) / width;

  // Start at negative half the width and height
  let xmin = -w / 2;
  let ymin = -h / 2;

  loadPixels();

  let xmax = xmin + w;
  let ymax = ymin + h;

  let dx = (xmax - xmin) / width;
  let dy = (ymax - ymin) / height;

  let y = ymin;
  for (let j = 0; j < height; j++) {
    let x = xmin;
    for (let i = 0; i < width; i++) {
      let a = x
      let b = y;
      let ca = a;
      let cb = b;
      let n = 0;
      while (n < maxiterations) {
        let aa = a * a;
        let bb = b * b;
        if (aa + bb > 16.0) {
          break; // Bail
        }
        let twoab = 2.0 * a * b;
        a = aa - bb + ca;
        b = twoab + cb;
        n++;
      }

      let pix = (i + j * width) * 4;
      if (n == maxiterations) {
        pixels[pix + 0] = 0;
        pixels[pix + 1] = 0;
        pixels[pix + 2] = 0;
      } else {
        pixels[pix + 0] = colorsRed[n];
        pixels[pix + 1] = colorsGreen[n];
        pixels[pix + 2] = colorsBlue[n];
      }
      x += dx;
    }
    y += dy;
  }
  updatePixels();
  noLoop()
}