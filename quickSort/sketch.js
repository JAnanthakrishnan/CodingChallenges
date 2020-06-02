let values = [];
let states = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < floor(width / 10); i++) {
    values[i] = random(height);
    states[i] = -1;
  }
  quickSort(values, 0, values.length - 1);
}
async function quickSort(arr, start, end) {
  if (start >= end) return;
  let index = await partition(arr, start, end);
  states[index] = -1;
  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end),
  ]);
}
async function swap(arr, i, j) {
  await sleep(50);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
async function partition(arr, start, end) {
  for (let i = start; i <= end; i++) {
    states[i] = 1;
  }
  let index = start;
  let pivot = arr[end];
  states[index] = 0;
  for (let i = start; i <= end - 1; i++) {
    if (arr[i] < pivot) {
      await swap(arr, index, i);
      states[index] = -1;
      index++;
      states[index] = 0;
    }
  }
  await swap(arr, index, end);
  for (let i = start; i <= end; i++) {
      if(i!=pivot){
        states[i] = -1;
      }

  }
  return index;
}
function draw() {
  background(0);
  noStroke()
  for (let p = 0, d = 0; p < values.length; p++, d += 10) {
    if (states[p] == 0) {
      fill('#E0777D');
    } 
    else if(states[p]==1){
        fill('#D6FFB7');
    }
    else {
      fill(200);
    }
    rect(d, height - values[p], 10, values[p]);
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
