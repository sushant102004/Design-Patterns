abstract class Television {
    abstract properties: any

    channelUp() : string {
        return 'Channeling Up'
    }

    channelDown() : string {
        return 'Channeling Down'
    }
}

class Samsung extends Television {
    properties = {
        width: '48-inch',
        height: '32-inch'
    }
}

const myTv: Samsung = new Samsung()

console.log(myTv.properties)