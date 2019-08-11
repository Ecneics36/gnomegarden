import Coords from './coordinates';
import { randElem } from '../utils';

export default class Creature {
  constructor(x, y, hunger = 0, maxHunger = 20) {
    this.coordinates = new Coords(x, y);
    this.hunger = hunger;
    this.maxHunger = maxHunger;
  }

  getMove(grid) {
    const possibleMoves = this.getTargets(grid);
    if (possibleMoves.length) {
      const returnedMove = randElem(possibleMoves);
      if (!returnedMove) {
        debugger;
      }
      return returnedMove;
    } else {
      if (!this.coords) {
        debugger;
      }
      return this.coords;
    }
  }

  getTargets(grid) {
    const currentX = this.coordinates.x;
    const currentY = this.coordinates.y;
    let targets = [];
    for (let rowMod = -1; rowMod <= 1; rowMod++) {
      for (let cellMod = -1; cellMod <= 1; cellMod++) {
        const newX = currentX + cellMod;
        const newY = currentY + rowMod;
        if (rowMod === 0 && cellMod === 0) {
          continue;
        } else if (
          this.isInGarden(newX, newY, grid[0].length, grid.length) &&
          this.canMoveToCoords(newX, newY, grid)
        ) {
          targets.push(new Coords(newX, newY));
        }
      }
    }
    return targets;
  }

  updateLocation(coords) {
    this.coordinates = coords;
  }

  resetHunger() {
    this.hunger = 0;
  }

  increaseHunger() {
    this.hunger++;
  }
  isStarved() {
    return this.hunger > this.maxHunger;
  }

  isInGarden(x, y, xLength, yLength) {
    return x >= 0 && y >= 0 && x < xLength && y < yLength;
  }

  canMoveToCoords(x, y, grid) {
    return grid[y][x] !== '#' && !(grid[y][x] && grid[y][x].symbol === '&');
  }
}
