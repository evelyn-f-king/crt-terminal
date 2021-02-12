let buttonSound = new Audio(
	"https://ecstatic-bell-944280.netlify.app//sound/button1.mp3"
);
let clickSound = new Audio(
	"https://ecstatic-bell-944280.netlify.app//sound/click1.mp3"
);

let keys = [
	new Audio("https://ecstatic-bell-944280.netlify.app/sound/key11.mp3"),
	new Audio("https://ecstatic-bell-944280.netlify.app/sound/key12.mp3"),
	new Audio("https://ecstatic-bell-944280.netlify.app/sound/key13.mp3"),
	new Audio("https://ecstatic-bell-944280.netlify.app/sound/key14.mp3")
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
