import Gnome from './gnome';
import Troll from './troll';
import Creature from './creature';

export default class Garden {
  constructor(
    layout,
    cssID,
    id = 0,
    age = 0,
    status = 'danger',
    gnome = null,
    trolls = [],
    quiet = false
  ) {
    this.id = id;
    this.age = age;
    this.grid = [];
    this.status = status;
    this.paused = true;
    this.gnome = gnome;
    this.trolls = trolls;
    this.cssID = cssID;
    this.quiet = quiet;

    layout.forEach((row, i) => {
      this.grid.push([]);
      row.forEach(cell => this.grid[i].push(cell));
    });
    // for when we're not loading a garden from the server
    if (!id) {
      // loop over layout to build grid property
      this.grid.forEach((row, y) =>
        row.forEach((cell, x) => {
          if (cell === '@') {
            this.gnome = new Gnome(x, y, 0);
            this.grid[y][x] = this.gnome;
          } else if (cell === '&') {
            const newTroll = new Troll(x, y);
            this.trolls.push(newTroll);
            this.grid[y][x] = newTroll;
          }
        })
      );
    } else {
      this.grid[this.gnome.coordinates.y][
        this.gnome.coordinates.x
      ] = this.gnome;
      this.trolls.forEach(
        troll => (this.grid[troll.coordinates.y][troll.coordinates.x] = troll)
      );
    }
    this.start();
    console.table(this.grid);
    this.render();
  }
  timer() {}
  start() {
    if (!this.paused) {
      return;
    } else if (this.status === 'safe') {
      this.render();
    }
    this.paused = false;
    const timer = setInterval(() => {
      if (this.paused) {
        clearInterval(timer);
      } else {
        this.age++;
        this.executeTurn();
      }
    }, 1000);
  }
  stop() {
    this.paused = true;
    this.age = 0;
    // const gridContent = document.getElementById(this.cssID);
    // gridContent.innerHTML = 'Game Ended';
  }
  pause() {
    this.paused = true;
  }
  save() {}
  finish() {}
  render() {
    const root = document.getElementById(this.cssID);
    root.classList.add('garden');
    root.innerHTML = '';
    for (let i = 0; i < this.grid.length; i++) {
      const newRow = document.createElement('div');
      newRow.id = 'row' + i;
      newRow.classList.add('rows');
      for (let j = 0; j < this.grid[i].length; j++) {
        const newCell = document.createElement('div');

        if (this.grid[i][j] instanceof Creature) {
          newCell.innerHTML =
            '<i class="fas ' + this.grid[i][j].symbol + '"></i>';
        } else if (this.grid[i][j] === '$') {
          newCell.innerHTML = '<i class="fab fa-pagelines"></i>';
        } else if (this.grid[i][j] === '#') {
          newCell.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
        } else {
          newCell.innerHTML = '&nbsp;';
        }
        newRow.appendChild(newCell);
      }
      root.appendChild(newRow);
    }
  }
  executeTurn() {
    this.executeGnomeTurn();
    this.executeTrollTurn();
    this.render();
  }

  executeGnomeTurn() {
    const moveCoords = this.gnome.getMove(this.grid);
    const oldCoords = this.gnome.coordinates;

    if (this.isThingThere(this.grid, moveCoords, '$')) {
      this.gnome.resetHunger();
    } else {
      this.gnome.increaseHunger();
      if (this.gnome.isStarved()) {
        alert("You're gnome is dead. All is lost.");
        this.status = 'safe';
        this.stop();
      }
    }

    this.grid[oldCoords.y][oldCoords.x] = this.gnome.tryPlant()
      ? '$'
      : '&nbsp;';

    this.gnome.updateLocation(moveCoords);
    this.grid[moveCoords.y][moveCoords.x] = this.gnome;
  }

  executeTrollTurn() {
    const newTrolls = [];

    this.trolls.forEach(troll => {
      const moveCoords = troll.getMove(this.grid);
      const oldCoords = troll.coordinates;

      const willBiteGnome =
        this.grid[moveCoords.y][moveCoords.x] instanceof Gnome;

      if (willBiteGnome) {
        this.gnome.health--;
        troll.hunger = 0;
        if (this.gnome.health === 0) {
          this.respectfulAlert(
            `${this.gnome.name} is dead. All is lost. It is ${
              troll.name
            }\'s fault.`
          );
          this.stop();
        } else {
          this.respectfulAlert(
            `${this.gnome.name} got nibbled by ${troll.name}`
          );
        }
      } else {
        this.grid[oldCoords.y][oldCoords.x] = ' ';
        troll.increaseHunger();
        if (troll.isStarved()) {
          this.respectfulAlert(
            `${troll.name} the troll withered away into nothingness.`
          );
          this.grid[oldCoords.y][oldCoords.x] = '$';
          return;
        } else {
          this.grid[moveCoords.y][moveCoords.x] = troll;
          this.grid[oldCoords.y][oldCoords.x] = ' ';
          troll.updateLocation(moveCoords);
          newTrolls.push(troll);
        }
      }
    });
    if (!newTrolls.length) {
      this.respectfulAlert(
        `${this.gnome.name} lived to the ripe old age of ${this.age}`
      );
      this.status = 'safe';
      this.stop();
    }
    this.trolls = newTrolls;
  }
  isThingThere(grid, coords, thing) {
    return grid[coords.y][coords.x] === thing;
  }
  respectfulAlert(msg) {
    if (!this.quiet) {
      alert(msg);
    }
  }
  handleMove() {}
  genGnome() {}
  genTroll() {}
  placeNewCreature() {}
  getTimeInSeconds() {}
}
