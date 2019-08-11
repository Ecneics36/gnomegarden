import Garden from './classes/garden';
import Gnome from './classes/gnome';
import Troll from './classes/troll';

fetch('https://gnome-api.herokuapp.com/garden', {
  method: 'POST'
})
  .then(response => response.json())
  .then(data => {
    console.log('gardenFromServer', data);
    console.table(data.grid);
    initGardens(data);
  });

function initGardens(data) {
  initGarden(1, data, true);
  // initGarden(2, data, true);
  // initGarden(3, data, true);
  // initGarden(4, data, true);
}

function initGarden(
  cssID,
  { grid, id, age, status, gnome, trolls },
  quiet = false
) {
  const gCoords = gnome.coordinates;
  const newTrolls = trolls.map(({ coordinates: coords, hunger, name }) => {
    return new Troll(coords.x, coords.y, hunger, name);
  });

  const currGarden = new Garden(
    grid,
    'grid-content',
    id,
    age,
    status,
    new Gnome(
      gCoords.x,
      gCoords.y,
      gnome.hunger,
      gnome.name,
      gnome.health,
      gnome.planted
    ),
    newTrolls,
    quiet
  );

  document.getElementById('pause').addEventListener('click', function() {
    currGarden.pause();
  });

  // document.getElementById('start').addEventListener('click', function() {
  //   currGarden.start();
  // });

  document.getElementById('stop').addEventListener('click', function() {
    currGarden.stop();
  });
}
