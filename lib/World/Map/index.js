// Perlin noise algo for use with map generation...

/**
 * need 3 layers of blocking,
 * - Floor (walkable)
 * - Wall (blocking)
 * - Wall (blocking)
 *
 * Potential object shape = {
 *  blocking: bool,
 *  texture: string (png asset for use in <img src={texture}> or CSS url({texture}))
 *  interactionEvent: function
 * }
 */

/**
 * @param players - Player[]
 * @param mapSize - number < 16 - Determines the size of the map as movable squares
 */
// https://github.com/joeiddon/perlin
import perlin from "./utils/perlin";

export default class Map {
  constructor(players, mapSize) {
    this.players = players.length;
    this.grid = [];
    // 34 for 2 spaces on the grid with 2 extra for walls
    this.nodes = mapSize;

    this.cnvs = document.createElement("canvas");
    this.cnvs.width = 512;
    this.cnvs.height = 512;
    let ctx = this.cnvs.getContext("2d");

    const GRID_SIZE = mapSize;
    const RESOLUTION = 128;
    const COLOR_SCALE = 255;

    let pixel_size = this.cnvs.width / RESOLUTION;
    let num_pixels = GRID_SIZE / RESOLUTION;

    for (let y = 0; y < GRID_SIZE; y += num_pixels / GRID_SIZE) {
      console.log("added row");
      for (let x = 0; x < GRID_SIZE; x += num_pixels / GRID_SIZE) {
        let v = parseInt(perlin.get(x, y) * COLOR_SCALE);
        ctx.fillStyle = "hsl(" + v + ",50%,50%)";
        ctx.fillRect(
          (x / GRID_SIZE) * this.cnvs.width,
          (y / GRID_SIZE) * this.cnvs.width,
          pixel_size,
          pixel_size
        );
      }
    }
  }

  giveMap() {
    return this.cnvs;
  }
}
