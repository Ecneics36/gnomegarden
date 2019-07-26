import Garden from './classes/garden';



const gardenFrame = document.getElementById('whole-garden');
const userInputs = document.getElementById('user-inputs');
const gridContent = document.getElementById('grid-content');


let inputGrid = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', '_', '_', '_', '#', '$', '_', '_', '_', '#'],
  ['#', '_', '_', '_', '$', '$', '_', '$', '_', '#'],
  ['#', '_', '$', '&', '$', '_', '_', '$', '_', '#'],
  ['#', '_', '$', '_', '_', '$', '_', '_', '_', '#'],
  ['#', '_', '$', '@', '$', '_', '$', '_', '_', '#'],
  ['#', '_', '$', '_', '$', '_', '$', '_', '_', '#'],
  ['#', '_', '_', '_', '_', '$', '_', '$', '_', '#'],
  ['#', '_', '&', '$', '$', '&', '_', '$', '_', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
];

// const gridFill = (grid) => {
// 	for(let i = 0; i < grid.length; i++) {
// 		var newRow = gridContent.appendChild(document.createElement('div'))
// 		newRow.id = 'row' + i;
// 		newRow.className = 'rows';
// 		for(let j = 0; j < grid[i].length; j++) {
// 			let newCell = document.createElement('div');
// 			newCell.innerHTML = grid[i][j];
// 			newRow.appendChild(newCell);
// 			console.log(grid[i][j]);
// 		}

// 	}
// }

const currGarden = new Garden(inputGrid, 'grid-content');
console.log('targets array', currGarden.gnome.getTargets(currGarden.grid));
// gridFill(currGarden.grid);

document.getElementById('pause').addEventListener('click', function(){
	currGarden.pause();
})

document.getElementById('start').addEventListener('click', function(){
	currGarden.start();
})

document.getElementById('stop').addEventListener('click', function(){
	currGarden.stop();
})
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
*/