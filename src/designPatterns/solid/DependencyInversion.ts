class PaymentProcessor {
	user: string;
	payment: Paypal;
	constructor(user: string) {
		this.user = user;
		this.payment = new Paypal()
	}
	pay(amount: number) {
		this.payment.makePayment(this.user, amount)
	}

}

class Paypal {
	constructor() {

	}
	makePayment(user: string, amount: number) {
		console.log("Making payment of " + amount + " to " + user + " via Paypal");
	}
}

class Stripe {
	constructor() {

	}
	makePayment(user: string, amount: number) {
		console.log("Making payment of " + amount + " to " + user + " using Stripe");
	}
}


class Shop {
	paymentProcessor: PaymentProcessor;
	constructor(paymentProcessor: PaymentProcessor) {
		this.paymentProcessor = paymentProcessor;
	}

	makePayment(user: string, amount: number) {
		this.paymentProcessor.pay(amount);
	}
}

// Dependency Inversion ensures that whenever new changes come changes are made only on the particular place without breaking changes in other place.