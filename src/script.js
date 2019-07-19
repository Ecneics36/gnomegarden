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

creature:

setInterval
*/

const garden = {
  name: 'sam',
  id: 34,
  blah: {
    cool: true,
    things: [5, 6, 7, 8]
  }
};

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
