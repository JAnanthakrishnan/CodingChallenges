let vals = [0, 1, 2,3,4,5,6];
let x = -1;
let y = -1;
function setup() {
  createCanvas(windowWidth, windowHeight);

}
function nextP(vals) {
  for (let i = 0; i < vals.length - 1; i++) {
    if (vals[i] < vals[i + 1]) {
      x = i;
    }
  }
  if (x === -1) {
    console.log("No more permutations");
    return null;
  }
  for (let j = x; j < vals.length; j++) {
    if (vals[j] > vals[x]) {
      y = j;
    }
  }

  let temp = vals.slice(vals);
  swap(temp, x, y);
  vals = rev(temp, x + 1)
  x = -1;
  return vals;
}
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
function rev(arr, p) {
  let b = arr.slice(p);
  b = reverse(b);
  let c = arr.slice(0, p);
  let d = c.concat(b);
  return d;
}
function draw() {
    background(0);
  vals = nextP(vals);
  if (vals === null) noLoop();
  else console.log(vals);
  let str =''
  for(let i = 0;i<vals.length;i++){
      str+=vals[i]
  }
  fill(255)
  textSize(30)
  text(str,width/2-100, 100)
}
