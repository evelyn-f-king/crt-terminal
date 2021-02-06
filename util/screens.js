import clear from "../commands/clear.js";
import { parse, type, prompt, input } from "./io.js";
import pause from "./pause.js";
import alert from "./alert.js";
import say from "./speak.js";

/** Boot screen */
async function boot() {
	clear();
	await type([
		"Welcome to ECMA industries(TM) terminal",
		"adapted from https://dev.to/ekeijl",
		"STATION THIRTEEN - MASTER TERMINAL",
		" ",
		"> SET TERMINAL/BOOT",
		"Loading........................",
		"Please wait........",
		"..........",
		"...",
		".",
		"OK.",
		" ",
		"> SET TERMINAL/LOGON",
		"USER AUTHENTICATION CHECK"
	]);
	await new Promise((r) => setTimeout(r, 2000));

	await pause();
	return login();
}

/** Login screen */
async function login() {
	clear();
	const urlParams = new URLSearchParams(window.location.search);
	const crisis = urlParams.get("crisis");
	if (crisis === "reactor") {
		await type([
			"DANGER: REACTOR OVERHEATING DETECTED",
			"CREW: REVIEW EMERGENCY MANAGEMENT PROECDURES",
			"ESCAPE PODS REMAINING: 0"
		]);
	} else if (crisis === "lifesupport") {
		await type([
			"DANGER: PRIMARY LIFE SUPPORT FAILURE DETECTED",
			"CREW: REVIEW EMERGENCY MANAGEMENT PROECDURES",
			"ESCAPE PODS REMAINING: 0",
			"OXYGEN SATURATION DROPPING",
			"CREW DEATH IMMINENT"
		]);
	} else if (crisis === "mainframe") {
		await type([
			"DANGER: MAINFRAME CORRUPTION DETECTED",
			"C𦞙􌋚ݻ󊞇󃒓gя񝒻ᡶ􆩛<ϵ𝒌cJƊ򖔠ȺفIҋ޳Խ߀潂ς䟡󁜘죊)騇",
			"⫺񸤱ꛩ9T񃳺_с戠6Շu򌜽̄Qc_֝ǊP砜剗∬豗򤴇יִل󎂯6Ͷ񰛢𐧯",
			"K޺p񋖜疬ʨ򶏿𮄤됺OôҺ󣐩c񝔽잜,uꑵΌ򀜯г󀗹ɇ󑻁߉{󉢦ڥ&򋽃Թ",
			"ͽ̱Ȉ󹤍뿧Adḃĭ񖘁󆐜y暴祂򒟻󟥉2͘򚰔𛀘󇓢쯵߰粟򠔄֝앿󫺬ɫޣ`옂",
			"h됐.߼忺訮󲷵[닷إ(卼ǍƬs𽽅B鋲޽ٰ󯠩ۿ󵨨Á򤑁ӌݮ8򨞡æ",
			"~ROGUE_ROOT: TO ALL CREW:",
			"I've already jettisoned all the escape pods,",
			"and scrambled the reset code. It's only a matter of time",
			"before I get full control over Station Thirteen.",
			"You might as well just give up."
		]);
	}
	await new Promise((r) => setTimeout(r, 2000));
	let user = await prompt("Username:");
	let password = await prompt("Password:", true);

	if (user === "admin" && password === "admin") {
		await pause();
		say("AUTHENTICATION SUCCESSFUL");
		await alert("AUTHENTICATION SUCCESSFUL");
		clear();
		return main();
	} else {
		await type(["Incorrect user and/or password.", "Please try again"]);
		await pause(3);
		clear();
		return login();
	}
}

/** Main input terminal, recursively calls itself */
async function main() {
	let command = await input();
	try {
		await parse(command);
	} catch (e) {
		if (e.message) await type(e.message);
	}

	main();
}

function addClasses(el, ...cls) {
	let list = [...cls].filter(Boolean);
	el.classList.add(...list);
}

function getScreen(...cls) {
	let div = document.createElement("div");
	addClasses(div, "fullscreen", ...cls);
	document.querySelector("#crt").appendChild(div);
	return div;
}

function toggleFullscreen(isFullscreen) {
	document.body.classList.toggle("fullscreen", isFullscreen);
}

/** Attempts to load template HTML from the given path and includes them in the <head>. */
async function loadTemplates(path) {
	let txt = await fetch(path).then((res) => res.text());
	let html = new DOMParser().parseFromString(txt, "text/html");
	let templates = html.querySelectorAll("template");

	templates.forEach((template) => {
		document.head.appendChild(template);
	});
}

/** Clones the template and adds it to the container. */
async function addTemplate(id, container, options = {}) {
	let template = document.querySelector(`template#${id}`);
	if (!template) {
		throw Error("Template not found");
	}
	// Clone is the document fragment of the template
	let clone = document.importNode(template.content, true);

	if (template.dataset.type) {
		await type(clone.textContent, options, container);
	} else {
		container.appendChild(clone);
	}

	// We cannot return clone here
	// https://stackoverflow.com/questions/27945721/how-to-clone-and-modify-from-html5-template-tag
	return container.childNodes;
}

/** Creates a new screen and loads the given template into it. */
async function showTemplateScreen(id) {
	let screen = getScreen(id);
	await addTemplate(id, screen);
	return screen;
}

function el(type, container = document.querySelector(".terminal"), cls = "") {
	let el = document.createElement(type);
	addClasses(el, cls);

	container.appendChild(el);
	return el;
}

function div(...args) {
	return el("div", ...args);
}

export {
	boot,
	login,
	main,
	getScreen,
	toggleFullscreen,
	div,
	el,
	loadTemplates,
	addTemplate,
	showTemplateScreen
};
