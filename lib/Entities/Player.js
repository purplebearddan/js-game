import Entity from "./Entity";

export default class Player extends Entity {
  constructor({ name, playerName, entityClass, inventory, equipped }) {
    super({ name, entityClass, inventory, equipped });
    this.playerName = playerName;
  }
}
