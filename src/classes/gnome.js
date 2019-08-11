import Creature from './creature';
import { randElem } from '../utils';

export default class Gnome extends Creature {
  constructor(x, y, hunger, name = 'Gerflunken', health = null, planted = 0) {
    super(x, y, hunger, 10);
    this.health = health;
    this.maxHunger = 10;
    this.name = name;
    this.symbol = 'fa-pastafarianism';
    this.planted = planted;
    if (this.health === null) {
      this.health = randElem([3, 4, 5]);
    }
  }
  tryPlant() {
    if (randElem([1, 4]) === 1) {
      this.planted++;
      return true;
    }
    return false;
  }
  handleBite() {
    this.health--;
  }
  isDead() {
    return this.health <= 0;
  }
}
