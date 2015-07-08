export default class NameFormatter {

  constructor(name) {
    this.name = name;
  }

  fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}
