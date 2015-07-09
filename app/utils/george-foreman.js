export default class GeorgeForeman {
  constructor() {
    this.generation = GeorgeForeman.addGeneration();
  }

  name() {
    return `George Foreman ${this.formatGeneration()}`;
  }

  formatGeneration() {
    switch (this.generation) {
      case 2:
        return "II";
      default:
        return "";
    }
  }

  static addGeneration() {
    if(!this.generation && this.generation !== 1) {
      this.generation = 1;
    } else {
      this.generation += 1;
    }
    return this.generation;
  }

}
