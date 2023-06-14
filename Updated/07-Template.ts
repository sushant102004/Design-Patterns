abstract class CoffeeBrewer {
    brewCoffee() : void {
        this.boilWater()
        this.brew()
        this.addExtras()
        this.pourIntoCup()
    }

    abstract brew() : void
    abstract addExtras() : void

    boilWater(): void {
        console.log('Boiling Water.')
    }

    pourIntoCup() : void {
        console.log('Pouring into cup.')
    }
}

class DripCoffee extends CoffeeBrewer {
    brew(): void {
        console.log('Dripping coffee.')
    }

    addExtras(): void {
        console.log('Adding cream and sugar.')
    }
}

const dripCoffee = new DripCoffee()
dripCoffee.brewCoffee()