// Define a base object
class Pizza {
    getPrice() {
      return 10;
    }
  }
  
  // Define a decorator
  class Cheese extends Pizza {
    constructor(pizza) {
      super();
      this.pizza = pizza;
    }
  
    getPrice() {
      return this.pizza.getPrice() + 2;
    }
  }
  
  // Usage example
  let myPizza = new Pizza();
  myPizza = new Cheese(myPizza); // add Cheese topping
  console.log(myPizza.getPrice()); // 12
  