class Car {
    name: string
    model: string
    price: number

    constructor(name: string, model: string, price: number) {
        this.name = name
        this.model = model
        this.price = price
    }
    start(): void { console.log("Engine Started") }
}

class CarPrototype {
    private proto: Car

    constructor(proto: Car) {
        this.proto = proto
    }

    clone(): Car {
        const { name, model, price } = this.proto
        const newCar = new Car(name, model, price)
        return newCar
    }
}

const carHandler = (function() {
    return {
        createMercedes2020: () => {
            const rawData = new Car('Mercedes Benz G Class', '2020', 10000000)
            const prototype = new CarPrototype(rawData)
            return prototype.clone()
        }
    }
})()

const merce : any = carHandler.createMercedes2020()
merce.color = 'Black'

console.log(merce)