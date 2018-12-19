var countPredictions = 0;
var storage = window.localStorage;
var predictions = null;

function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

function save() {
	console.log(storage);
	storage.setItem('predictions', JSON.stringify(predictions));
}

function load() {
	return JSON.parse(storage.getItem('predictions'));
}

document.querySelector('#generate-prediction').addEventListener('click', function() {
	if (!predictions || predictions.length === 0) return;

	var random = randomInteger(0, predictions.length-1);

	document.querySelector('#prediction').innerHTML = predictions[random];
	
	var newDiv = document.createElement("div"); 
	var newContent = document.createTextNode(predictions[random]); 
	newDiv.appendChild(newContent);
	document.querySelector('#history').appendChild(newDiv);

	if (countPredictions === 0) {
		document.querySelector('#prediction').style.visibility = 'visible';
		document.querySelector('#history').style.visibility = 'visible';
	}

	predictions.splice(random, 1);

	countPredictions++;
});

window.onload = function() {
	var tmp = load();
	predictions = (tmp) ? tmp : texts;
}