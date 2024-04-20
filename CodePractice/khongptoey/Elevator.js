class Elevator {
  constructor(maxFloor, minFloor) {
    this.currentFloor = 0;
    this.maxFloor = maxFloor;
    this.minFloor = minFloor;
  }
  goUp() {
    if (this.currentFloor < this.maxFloor) {
      return this.currentFloor++;
    }
  }
  goDown() {
    if (this.currentFloor > this.minFloor) {
      return this.currentFloor--;
    }
  }
  goToFloor(floor) {
    if (floor >= this.minFloor && floor <= this.maxFloor) {
      this.currentFloor = floor;
    }
  }
  displayFloor() {
    console.log(`current floor: ${this.currentFloor}`);
  }
}

const elevator = new Elevator(10, 0);
elevator.displayFloor();

elevator.goUp();
elevator.displayFloor();

elevator.goToFloor(5);
elevator.displayFloor();

elevator.goDown();
elevator.displayFloor();
