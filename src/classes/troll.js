import Creature from './creature';

export default class Troll extends Creature {
  constructor(x, y, hunger, name = 'Bob') {
    super(x, y, hunger, 20);
    this.name = name;
    this.symbol = 'fa-ghost';
  }
}
