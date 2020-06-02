// let angle = 0;

// Maximum number of iterations for each point on the complex plane
const maxiterations = 100;

// Colors to be used for each possible iteration count
const colorsRed = [];
const colorsGreen = [];
const colorsBlue = [];

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1);

  // Create the colors to be used for each possible iteration count
  for (let n = 0; n < maxiterations; n++) {
    // Gosh, we could make fancy colors here if we wanted
    let hu = sqrt(n / maxiterations);
    let col = color(hu, 255, 150);
    colorsRed[n] = red(col);
    colorsGreen[n] = green(col);
    colorsBlue[n] = blue(col);
  }
}

function draw() {
  let ca = map(mouseX, 0, width, -1, 1); //-0.70176;
  let cb = map(mouseY, 0, height, -1, 1); //-0.3842;

  // let ca = cos(angle * 3.213); //sin(angle);
  // let cb = sin(angle);

  // angle += 0.02;

  background(255);

  let w = 5;
  let h = (w * height) / width;

  // Start at negative half the width and height
  let xmin = -w / 2;
  let ymin = -h / 2;

  // Make sure we can write to the pixels[] array.
  // Only need to do this once since we don't do any other drawing.
  loadPixels();

  // x goes from xmin to xmax
  let xmax = xmin + w;
  // y goes from ymin to ymax
  let ymax = ymin + h;

  // Calculate amount we increment x,y for each pixel
  let dx = (xmax - xmin) / width;
  let dy = (ymax - ymin) / height;

  // Start y
  let y = ymin;
  for (let j = 0; j < height; j++) {
    let x = xmin;
    for (let i = 0; i < width; i++) {
      let a = x;
      let b = y;
      let n = 0;
      while (n < maxiterations) {
        let aa = a * a;
        let bb = b * b;
        if (aa + bb > 4.0) {
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
}