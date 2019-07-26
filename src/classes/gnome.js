import Creature from './creature';
import { randElem } from '../utils';

export default class Gnome extends Creature {
	constructor(x, y, hunger, name = '', health = null, planted = 0) {
		super(x, y, hunger, 10)
		this.health = health;
		this.maxHunger = 10;
		this.name = name;
		this.symbol = '@';
		this.planted = planted;
		if(this.health === null){
			this.health = randElem(3,4,5); //still need to create this function
		}
	}
	tryPlant(planted) {
		if(randElem(1,4) === 1) {
			return true;
		}
		return false;
	}
	getTargets() {

	}
}