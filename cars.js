// Task 1 - Constructor Function

const Car = function (make, model, colour, image, registrationNumber, price) {
  this.make = make;
  this.model = model;
  this.colour = colour;
  this.image = image;
  this.registrationNumber = registrationNumber;
  this.price = price;
  this.editPrice = function (newPrice) {
    this.price = newPrice;
  };
  this.showAll = function () {
    console.log(
      `The car make is: ${this.make}\nThe car model is: ${this.model}\nThe car colour is: ${this.colour}\nThe car image is: ${this.image}\nThe car registrationNumber is: ${this.registrationNumber}\nThe car price is: ${this.price}`
    );
  };
};

const car1 = new Car(2020, "Chevrolet", "red", "image", "546521", 50000);
const car2 = new Car(2018, "Audi", "blue", "image", "515125", 150000);
const car3 = new Car(2019, "BMW", "black", "image", "581521", 200000);
const car4 = new Car(2015, "Cadillac", "black", "image", "754515", 130000);
const car5 = new Car(2021, "Datsun", "white", "image", "123132", 70000);

class Rectangle {
  constructor() {
    let height;
    let width;
  }
  setHight(height) {
    this.height = height;
  }
}

const req = new Rectangle();
req.setHight(20);
console.log(req.height);
