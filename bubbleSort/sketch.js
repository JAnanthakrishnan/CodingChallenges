let values = [];
let i = 0;
let j = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < floor(width / 10); i++) {
   // values[i] = noise(i / 100.0) * height;
    values[i] = random(height)
  }
}
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
function draw() {
  background(0);
  // for (let j = 0; j < values.length - i - 1; j++) {
  //   if (values[j] > values[j + 1]) {
  //     let temp = values[j];
  //     values[j] = values[j + 1];
  //     values[j + 1] = temp;
  //   }
  // }
  // i++;
  // if (i === values.length) {
  //   console.log("sorting over");
  //   noLoop();
  // }
  if (values[j] > values[j + 1]) {
    temp = values[j];
    values[j] = values[j + 1];
    values[j + 1] = temp;
  }
  if (i < values.length) {
    j = j + 1;
    if (j >= values.length - i - 1) {
      j = 0;
      i++;
    }
  } else {
    console.log("Sorting over");
    noLoop();
  }

  for (let d = 0, p = 0; p < values.length; d += 10, p++) {
    stroke(255);
    fill(100);
    // line(d, height, d, height - values[d]);
    if (p === j) {
      fill(255, 0, 0);
    }
    if(p>values.length-1-i){
      fill(0,255,0)
    }
    rect(d, height - values[p], 10, values[p]);
    //rect(d,20,10,100)
  }
}
