export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      return 'name must be a string';
    }

    if (typeof code !== 'string') {
      return 'code must be a string';
    }
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
