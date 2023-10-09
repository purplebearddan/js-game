/**
 * Effects for Entities from items
 * @param name: String, name of the effect
 * @param type: String, type of effect ("Poison"/"Flying")
 * @param damage Number, Can be negative to show a healing ability or positive to damage the entity
 * @param time Number of seconds to make the effect last for
 */
export default class Effect {
  constructor({ name, type, damage, time }) {
    this.name = name;
    this.type = type;
    this.damage = damage;
    this.time = time;
  }
}
