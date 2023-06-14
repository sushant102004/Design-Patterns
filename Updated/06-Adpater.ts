interface PaymentGateway {
    pay(amount: number): void
}

class PayPal {
    makePayment(amount: number): void {
        console.log(`Making payment of ${amount} via PayPal`)
    }
}

class Stripe {
    makePayment(amount: number): void {
        console.log(`Making payment of ${amount} via Stripe`)
    }
}

class PayPalAdapter implements PaymentGateway {
    private api: PayPal

    constructor(api: PayPal) { this.api = api }

    pay(amount: number): void {
        this.api.makePayment(amount)
    }
}

class StripeAdapter implements PaymentGateway {
    private api: Stripe

    constructor(api: Stripe) { this.api = api }

    pay(amount: number): void {
        this.api.makePayment(amount)
    }
}

class PaymentProcessor {
    private gateway: PaymentGateway

    constructor(gateway: PaymentGateway) { this.gateway = gateway }

    processPayment(amount: number): void {
        this.gateway.pay(amount)
    }
}

const paypalG =  new PayPal()
const paypalA = new PayPalAdapter(paypalG)

const paymentProcessor = new PaymentProcessor(paypalA)

paymentProcessor.processPayment(100)