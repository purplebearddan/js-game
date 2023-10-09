export default class Entity {
  constructor({
    name,
    entityClass,
    inventory = [],
    equipped = {
      Head: null,
      Primary: null,
      Secondary: null,
      Torso: null,
      Legs: null,
      Feet: null,
    },
  }) {
    this.name = name;
    this.entityClass = entityClass;
    // ensures an array
    this.inventory = [...inventory];
    // ensures object shape
    this.equipped = {
      Head: null,
      Primary: null,
      Secondary: null,
      Torso: null,
      Legs: null,
      Feet: null,
      ...equipped,
    };
  }

  // functions for attack power based on objects in inventory
  getDef() {
    let defence = 0;
    for (let part in this.equipped) {
      defence += this.equipped[part]?.defence;
    }
    return defence;
  }
  getAtk() {
    let attack = 0;
    for (let part in this.equipped) {
      attack += this.equipped[part]?.damage;
    }
    return attack;
  }
}
