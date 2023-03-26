class Car {
    constructor(name, model, wheels) {
        this.name = name
        this.model = model
        this.wheels = wheels
    }
    start() { console.log('Engine Started') }
}

class CarPrototype {
    constructor(proto) {
        this.clone = () => {
            const newCar = new Car(proto.name, proto.model, proto.wheels)
            return newCar
        }
    }
}

const carHandler = (function() {
    return {
        createMercedes2022: () => {
            const mercedes2022Proto = new Car('Mercedes Benz 22', 2022, 4)
            const prototype = new CarPrototype(mercedes2022Proto)
            return prototype.clone()
        },
        createBharatBenzTruck: () => {
            const bharaBenzTruckProto = new Car('Bharat Benz', 2010, 8)
            const prototype = new CarPrototype(bharaBenzTruckProto)
            return prototype.clone()
        }
    }
})()

const mercedes = carHandler.createMercedes2022()
const bharatBenz = carHandler.createBharatBenzTruck()


console.log('Prototype Objects: -')
console.log()

console.log(mercedes)
console.log(bharatBenz)

// Adding more object values

mercedes.topSpeed = '318 Km/h'

console.log()

console.log('After adding top speed value: -')
console.log()
console.log(mercedes)