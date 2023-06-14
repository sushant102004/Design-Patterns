class Pizza {
    price: number = 10
    getPrice() { return this.price; }
}


class Cheese extends Pizza {
    pizza: Pizza

    constructor(pizza: Pizza) {
        super();
        this.pizza = pizza
    }

    addCheese() {
        console.log('Adding Cheese...')
    }

    getPrice(): number {
        this.addCheese()
        return this.pizza.getPrice() + 20
    }
}

let myPizza = new Pizza()

myPizza = new Cheese(myPizza)
console.log(myPizza.getPrice())