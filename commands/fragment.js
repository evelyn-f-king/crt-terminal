const urlParams = new URLSearchParams(window.location.search);
const fragment = new urlParams.get("fragment");
let output = "";
if (fragment === undefined) {
	output = "There is no mainframe fragment on this terminal.";
} else {
	output = "Fragment code " + fragment;
}

export { output };
