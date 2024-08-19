const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const changeColor = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 20;
let fontColor = 'white';

function bigText() {
	fontSize += 5;
	p.style.fontSize = fontSize + 'px';
}

sizeUp.addEventListener('click', bigText);

function smallText() {
	fontSize -= 5;
	p.style.fontSize = fontSize + 'px';
}

sizeDown.addEventListener('click', smallText);

function newColor() {
	p.style.color = 'red'; 
}

changeColor.addEventListener('click', newColor);
