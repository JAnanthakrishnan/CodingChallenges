class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(w/2, h/2);
    this.yspeed = 0;
    this.xspeed = 0;
  }
  show() {
    fill(0);
    for (let obj of this.body) rect(obj.x, obj.y, 1, 1);
  }
  update() {
    if (keyCode === 38) {
      this.yspeed = -1;
      this.xspeed = 0;
    }
    if (keyCode === 40) {
      this.yspeed = 1;
      this.xspeed = 0;
    }
    if (keyCode === 40) {
      this.yspeed = 1;
      this.xspeed = 0;
    }
    if (keyCode === 37) {
      this.yspeed = 0;
      this.xspeed = -1;
    }
    if (keyCode === 39) {
      this.yspeed = 0;
      this.xspeed = 1;
    }
    // this.body[0].x += this.xspeed;
    // this.body[0].y += this.yspeed;
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xspeed;
    head.y += this.yspeed;
    this.body.push(head);
  }
  eat(food) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (floor(x) == food.x && floor(y) == food.y) {
      this.grow(food);
      return true;
      console.log("eat")
    }
    return false;
  }
  grow(food) {
    let newV = createVector(food.x, food.y);
    this.body.push(newV);
  }
  death(b) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    for (let i = 0; i < this.body.length - 1; i++) {
      if (x === this.body[i].x && y === this.body[i].y && b) return true;
    }
    if (x < 0 || x > w  || y < 0 || y > h ) {
      return true;
    }
    return false;
  }
}
