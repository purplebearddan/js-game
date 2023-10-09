import Item from "./Item";

export default class Consumable extends Item {
  constructor({ name, weight, value, effect }) {
    super({ name, weight, value });
    this.effect = effect;
  }

  consume() {
    return this;
  }
}
