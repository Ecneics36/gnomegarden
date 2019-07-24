/*
garden:
	id - unique id
	grid - 2D Arr
	gnome - Gnome Class extends creature
		name
		health
		lastAte
	trolls - Troll class extends creature
	plants
	pause (defaults to false)

	public:
	-start()
	-stop()
	-pause()
	-save()

	private:
	-genGnome()
	-genTroll()
	-placeNewCreature()
	-getTimeInNSeconds()
*/
const gardenFrame = document.getElementById('whole-garden');
const userInputs = document.getElementById('user-inputs');
const gridContent = document.getElementById('grid-content');

class Garden {
	constructor(id, age, gnome, trolls, grid, status) {
		this.id = id;
		this.age = age;
		this.gnome = gnome;
		this.trolls = trolls;
		this.grid = grid;
		this.status = status;
		this.paused = true;
	}
	timer() {

	}
	start() {

	}
	stop() {

	}
	pause() {

	}
	save() {

	}
	finish () {

	}
	render () {

	}
	executeTurn() {

	}
	handeMove() {

	}
	genGnome() {

	}
	genTroll() {

	}
	placeNewCreature() {

	}
	getTimeInSeconds() {

	}
}

class Creature {
	constructor(coordinates, hunger) {
		this.coordinates = coordinates;
		this.hunger = hunger;
	}
	getMove() {

	}
	getTargets(grid) {

	}
	updateLocation(coordinates) {

	}
	resetHunger() {
		hunger = 0;
	}
	isStarved() {

	}
}
class Gnome extends Creature {
	constructor(health, symbol = '@', planted) {
		this.health = health;
		this.maxHunger = 10;
		this.name = 'Thelonious';
		this.symbol = symbol;
		this.planted = planted;
	}
	tryPlant(planted) {

	}
	getTargets() {

	}
}

class Troll extends Creature {
	constructor(symbol = '&') {
		this.maxHunger = 20;
		this.name = 'Miles';
		this.symbol = symbol;
	}
}
let inputGrid = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '@', '$', '_', '#', '$', '_', '_', '_', '#'],
  ['#', '#', '_', '_', '$', '$', '_', '$', '_', '#'],
  ['#', '_', '$', '&', '$', '_', '_', '$', '_', '#'],
  ['#', '_', '$', '_', '_', '$', '_', '_', '_', '#'],
  ['#', '_', '$', '_', '$', '_', '$', '_', '_', '#'],
  ['#', '_', '$', '_', '$', '_', '$', '_', '_', '#'],
  ['#', '_', '_', '_', '_', '$', '_', '$', '_', '#'],
  ['#', '_', '&', '$', '$', '&', '_', '$', '_', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
];

const gridFill = (grid) => {
	for(let i = 0; i < grid.length; i++) {
		var newRow = gridContent.appendChild(document.createElement('div'))
		newRow.id = 'row' + i;
		newRow.className = 'rows';
		for(let j = 0; j < grid[i].length; j++) {
			let newCell = document.createElement('div');
			newCell.innerHTML = grid[i][j];
			newRow.appendChild(newCell);
			console.log(grid[i][j]);
		}

	}
}

const currGarden = new Garden(24,3, {}, {}, inputGrid, 'safe');

gridFill(currGarden.grid);

// CLICK NEW GARDEN BUTTON TO REPOPULATE GARDEN
// const newGarden = () => currGarden = new Garden()

// userInputs.addEventListener('click', function(event) {

// });

/*
localStorage.setItem('garden', JSON.stringify(garden));
// console.log();
const dehydratedGarden = localStorage.getItem('garden');
const rehydratedGardenObject = JSON.parse(dehydratedGarden);
console.log(rehydratedGardenObject);

let count = 0;
const pause = false;
const timer = setInterval(() => {
  if (count >= 20) {
    return clearInterval(timer);
  }
  console.log('hey');
  count++;
}, 1000);

*/
