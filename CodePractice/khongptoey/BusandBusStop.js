class Bus {
  constructor(busNumber, destinations) {
    this.busNumber = busNumber;
    this.destinations = destinations;
  }
}

class BusStop {
  constructor(destinations) {
    this.destinations = destinations;
    this.buses = [];
  }
  addBus(bus) {
    if (bus instanceof Bus) {
      const Alldestinations = this.destinations.every((stop) =>
        bus.destinations.includes(stop)
      );
      if (Alldestinations) {
        this.buses.push(bus);
        return true;
      }
      return false;
    }
  }
  removeBus(busNumber) {
    const index = this.buses.findIndex((bus) => bus.busNumber === busNumber);
    if (index !== -1) {
      this.buses.splice(index, 1);
      return true;
    }
    return false;
  }
  listBuses() {
    if (this.buses.length === 0) {
      return [];
    }
    return this.buses.map((bus) => ({
      busNumber: bus.busNumber,
      destinations: bus.destinations,
    }));
  }
}
// สร้าง Bus objects
const busObj = new Bus(21, ["A", "B", "C"]);
const busObj2 = new Bus(75, ["B", "D", "E"]);
const busObj3 = new Bus(140, ["C", "F", "G"]);

// BusStop objects
const busStopA = new BusStop(["A", "B"]);
const busStopB = new BusStop(["B", "D"]);
const busStopC = new BusStop(["C", "F"]);

console.log(busStopA.addBus(busObj)); //true
console.log(busStopA.addBus(busObj2)); //false เพราะใช้every เพราะตัวใดตัวนึงไม่ตรงเงื่่อนไข
console.log(busStopA.addBus(busObj3)); //false ไปไม่ถึง
// console.log(busStopB.addBus(busObj2)); True

console.log(busStopA.removeBus(140));
console.log(busStopA.removeBus(21));

busStopA.addBus(busObj);
busStopB.addBus(busObj2);
busStopC.addBus(busObj3);

console.log(busStopA.listBuses());
console.log(busStopB.listBuses());
console.log(busStopC.listBuses());
