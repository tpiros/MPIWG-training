export class car {
  constructor() {
    this.speed = 0;
  }

  increaseSpeed(speed = 1) {
    this.speed += speed;
  }

  decreaseSpeed() {
    this.speed -= 1;
  }
}
