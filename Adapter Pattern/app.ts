interface IPhone {
    useLightning() : void
}

interface Android {
    useTypeC() : void
}

class iPhone14 implements IPhone {
    useLightning() : void {
        console.log(`Using Lightning Port.`)
    }
}

class SamsungA32 implements Android {
    useTypeC(): void {
        console.log(`Using Type C.`)
    }
}

class TypeCToLightning implements Android {
    iPhoneDevice : IPhone

    constructor(device : IPhone) {
        this.iPhoneDevice = device
    }

    useTypeC(): void {
        console.log(`Adapting Lightning from Type C.`)
        this.iPhoneDevice.useLightning()
    }
}

const iPhone14Max = new iPhone14()
const adapter = new TypeCToLightning(iPhone14Max)

adapter.useTypeC()