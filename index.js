var countPredictions = 0;

function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

document.querySelector('#generate-prediction').addEventListener('click', function() {
	if (texts.length === 0) return;

	var random = randomInteger(0, texts.length-1);

	document.querySelector('#prediction').innerHTML = texts[random];
	
	var newDiv = document.createElement("div"); 
	var newContent = document.createTextNode(texts[random]); 
	newDiv.appendChild(newContent);
	document.querySelector('#history').appendChild(newDiv);

	if (countPredictions === 0) {
		document.querySelector('#prediction').style.visibility = 'visible';
		document.querySelector('#history').style.visibility = 'visible';
	}

	texts.splice(random, 1);

	countPredictions++;
});