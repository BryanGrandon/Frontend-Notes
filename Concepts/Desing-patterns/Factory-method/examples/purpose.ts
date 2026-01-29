// -------------------------------------
// Product
// -------------------------------------

interface Payment {
  pay(amount: number): void
}

// -------------------------------------
// Concrete Product
// -------------------------------------

class CreditCardPayment implements Payment {
  pay(amount: number): void {
    console.log(`💳 Paid ${amount} using Credit Card`)
  }
}

// -------------------------------------
// Creator
// -------------------------------------

abstract class PaymentProcessor {
  abstract createPayment(): Payment

  process(amount: number): void {
    const payment = this.createPayment()
    payment.pay(amount)
  }
}
