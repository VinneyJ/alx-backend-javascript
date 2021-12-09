import Currency from './3-currency';

export default class Pricing {
  constructor(amount = 0, currency) {
    this._amount = amount;
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError(`The ${currency} is not an instance of Currency`);
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // eslint-disable-next-line class-methods-use-this
  convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
