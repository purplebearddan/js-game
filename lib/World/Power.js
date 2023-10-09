/**
 *
 * Power model for use in items
 *
 * @param name: String
 * @param attack: Number
 * @param defence: Number
 * @param effects: Effect[]
 */
export default class Power {
  constructor({ name, attack = 0, defence = 0, effects = [] }) {
    this.name = name;
    this.attack = attack;
    this.defence = defence;
    this.effects = [...effects];
  }
}
