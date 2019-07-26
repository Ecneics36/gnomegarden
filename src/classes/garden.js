import Gnome from './gnome';
import Troll from './troll';
import Creature from './creature';

export default class Garden {
	constructor(layout, cssID, id = 0, age = 0, status = 'danger', gnome = null, trolls = []) {
		this.id = id;
		this.age = age;
		this.grid = layout;
		this.status = status;
		this.paused = true;
		this.gnome = gnome;
		this.trolls = trolls;
		this.cssID = cssID;
		if(!id){
			this.grid = layout;
			this.grid.forEach((row, y) => row.forEach((cell, x) => {
				if(cell === '@'){
					this.gnome = new Gnome(x,y,0);
					this.grid[y][x] = this.gnome;
				} else if(cell === '&'){
					const newTroll = new Troll(x,y);
					this.trolls.push(newTroll);
					this.grid[y][x] = newTroll;
				}
			}))
		}
		this.start();
		console.table(this.grid);
		this.render();
	}
	timer() {

	}
	start() {
		if(!this.paused){
			return;
		}
		this.paused = false;
		const timer = setInterval(() => {
			if (this.paused) {
				clearInterval(timer);
			} else {
				this.age++;
				console.log(this.age);
				//executeTurn();
			}
		}, 1000);
	}
	stop() {
		this.paused = true;
		this.age = 0;
		const gridContent = document.getElementById(this.cssID);
		gridContent.innerHTML = 'Game Ended';
	}
	pause() {
		this.paused = true;
	}
	save() {

	}
	finish () {

	}
	render () {
		const root = document.getElementById(this.cssID);
		root.classList.add('garden');
		this.grid.forEach((row,y) => {
			const newRow = document.createElement('div');
			newRow.id = 'row' + y;
			newRow.className = 'rows';
			row.forEach((cell,x) => {
				const newCell = document.createElement('div');
				if(cell instanceof Creature){
					newCell.innerHTML = cell.symbol;
				} else if(cell) {
					newCell.innerHTML = cell;
				} else {
					newCell.innerHTML = '&nbsp;';
				}
				newRow.appendChild(newCell);
			})
			root.appendChild(newRow);
		})
	}

	executeTurn() {

	}
	handleMove() {

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