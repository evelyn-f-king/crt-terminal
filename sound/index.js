let buttonSound = new Audio(
	"https://ecstatic-bell-944280.netlify.app//sound/button.mp3"
);
let clickSound = new Audio(
	"https://ecstatic-bell-944280.netlify.app//sound/click.mp3"
);

let keys = [
	new Audio("https://ecstatic-bell-944280.netlify.app/sound/key1.mp3"),
	new Audio("https://ecstatic-bell-944280.netlify.app/sound/key2.mp3"),
	new Audio("https://ecstatic-bell-944280.netlify.app/sound/key3.mp3"),
	new Audio("https://ecstatic-bell-944280.netlify.app/sound/key4.mp3")
];

function button() {
	buttonSound.play();
}
function click() {
	clickSound.play();
}

function typeSound() {
	// Math.floor(Math.random() * keys.length);
	let i = Math.floor(Math.random() * keys.length);
	keys[i].currentTime = 0;
	keys[i].play();
}

export { button, click, typeSound };
