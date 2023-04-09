class TV {
    turnOn() : void { console.log(`Turned TV on.`) }

    turnOff() : void { console.log(`Turend TV off.`) }
}

class Amplifier {
    turnOn() : void { console.log(`Turned Amplifier on.`) }

    turnOff() : void { console.log(`Turned Amplifier off.`) }
}

class Lights {
    dim() : void { console.log(`Lights dimmed.`) }

    bright() : void { console.log(`Lights Brighted.`) }
}

class Facade {
    tv : TV
    amplifier : Amplifier
    lights : Lights

    constructor(tv : TV, amplitude : Amplifier, lights : Lights) {
        this.tv = tv
        this.amplifier = amplitude
        this.lights = lights
    }

    watchMovie() : void {
        this.tv.turnOn()
        this.amplifier.turnOn()
        this.lights.dim()
    }

    endMovie() : void {
        this.tv.turnOff()
        this.amplifier.turnOff()
        this.lights.bright()
    }
}

const tv = new TV()
const amplifier = new Amplifier()
const lights = new Lights()

const allInOneController = new Facade(tv, amplifier, lights)


allInOneController.watchMovie()

// allInOneController.endMovie()