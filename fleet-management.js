// Vehicle 
class Vehicle {
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  // If else for distance
  drive(distance) {
    if (distance > 0) {
      this.mileage += distance;
    } else {
      console.log("Distance must be a positive number.");
    }
  }

  // Vehicle getDetails
  getDetails() {
    return `${this.year} ${this.make} ${this.model} (${this.type}) - Mileage: ${this.mileage} miles`;
  }
}

// Vehicle Creator
const car = new Vehicle('Car', 'Subaru', 'Crosstrek', 2014);
const truck = new Vehicle('Truck', 'Toyota', 'Tundra', 2012);
const motorcycle = new Vehicle('Motorcycle', 'Kawasaki', 'Ninja', 2018);

// Distance
car.drive(500);
truck.drive(250);
motorcycle.drive(50);

// Console Logger
console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());