/**
 * Main Game executable
 * @param players: an array of Player instances
 */
export default class Game {
  constructor(...players) {
    this.players = players;
    // this.emitter = new EventEmitter();

    this.rand = Math.random();
  }

  battle(...enemies) {}
}
