import Equippable from "./Equipable";

export default class Weapon extends Equippable {
  constructor({ name, weight, value, effects = [], power }) {
    super({ name, weight, value, effects, power });
  }
}

const weapon1 = new Weapon({
  name: "The Big Sword",
  weight: 3,
  value: 1120,
  effects: [],
  power: new Power(),
});
