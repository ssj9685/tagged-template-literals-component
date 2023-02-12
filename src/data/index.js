export class PageData {
  num = 0;

  setDependents(...dependents) {
    this.dependents = dependents;
  }

  render() {
    for (const dependent of this.dependents) {
      dependent.render();
    }
  }

  setNum(num) {
    this.num = num;
    this.render();
  }

  reset() {
    this.num = 0;
    this.render();
  }

  static #state = new PageData();
  static get state() {
    return this.#state;
  }
}
