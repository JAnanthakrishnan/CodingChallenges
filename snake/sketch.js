let snake;
let score = 0;
let rez = 20;
let w;
let h;
let food;
function setup() {
  createCanvas(windowWidth, windowHeight);
  w = floor(width / rez);
  h = floor(height / rez);
  snake = new Snake();
  foodLocation();
}
function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
  console.log(food)
}
function draw() {
  background(220);
  scale(rez);
  frameRate(10);
  noStroke();
  snake.show();
  snake.update();
  snake.death();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
  let b = true;
  if (snake.eat(food)) {
    foodLocation();
    b = false;
    score++;
  }
  if (snake.death(b)) {
    background(0);
    textSize(1.5);
    text(
      `Game over, Score: ${score}`,
      w / 2 - 150 / rez,
      h / 2 - 10 / rez,
      w / 2 + 10 / rez,
      h / 2 + 10 / rez
    );
    noLoop();
  }
}
