export default class Coords {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	equals(coords) {
		return coords.x === this.x && coords.y === this.y;
	}
}