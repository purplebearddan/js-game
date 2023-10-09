import Item from "./Item";

/**
 * @param name: String
 * @param weight: Number
 * @param value: Number
 * @param effects: Array of Effect Objects to apply to the Entity when this item is Equiped
 * @param powerModel: Power Object to represent either attack power, defense power
 */
export default class Equippable extends Item {
  constructor({ name, weight, value, effects = [], power }) {
    super({ name, weight, value });
    this.effects = [...effects];
    this.power = power;
  }
}
