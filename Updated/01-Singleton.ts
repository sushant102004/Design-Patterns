class Singleton {
    public static instance: Singleton

    private constructor() {
        // This constructor will prevent direct instantiation.
    }

    static getInstance(): Singleton {
        if (this.instance == undefined) {
            console.log('Creating new instance')
            this.instance = new Singleton()
        } else {
            console.log('Returning existing instance')
        }

        return this.instance
    }
}

const sOne = Singleton.getInstance()
const sTwo = Singleton.getInstance()
const sThree = Singleton.getInstance()
