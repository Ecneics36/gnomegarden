export { randElem, randFilteredElem  }

function randElem(arr){
	var randomNum = Math.floor(Math.random() * arr.length);
	return arr[randomNum];
}

function randFilteredElem(arr,filter) {
	var element = randElem(arr);
	while (element === filter) {
		element = randElem(arr);
	}
return element;
}