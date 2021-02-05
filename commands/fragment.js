const urlParams = new URLSearchParams(window.location.search);
const fragment = urlParams.get("fragment");
let output = "";
if (fragment === null) {
	output = "There is no mainframe fragment on this terminal.";
} else {
	output = "Fragment code " + fragment;
	if (fragment === "1") {
		output = `
~ROGUE_ROOT: YOU'RE NOT GOING TO GET THE FIRST FRAGMENT.\n
I'VE BURIED THE FRAGMENT IN THE PATTERN\n
ONE OF THESE DOESN'T BELONG\n
15 29 56 107 208
     `;
		// code is 107
	} else if (fragment === "2") {
		output = `
    ~ROGUE_ROOT: THE SECOND FRAGMENT IS NOT GOING TO BE EASY\n
    I'VE DESTROYED THE SECOND FRAGMENT AND HIDDEN IT IN THE PATTERN\n
    YOU'LL NEVER SOLVE THE NEXT NUMBER IN TIME\n
    16 32 39 78 90 \n`;
		// multiply by 2, then add the sum of digits
		// answer is 180
	} else if (fragment === "3") {
		output = `
  ~ROGUE_ROOT: DID YOU THINK THE THIRD FRAGMENT WOULD JUST COME EASILY?\n
  I'VE CONVERTED THE THIRD FRAGMENT TO WORDS,\n
  GOOD LUCK CONVERTING IT BACK!\n
  \n
  OH, AND I'VE INCLUDED THE FOURTH FRAGMENT'S CLUE HERE, AND THE THIRD\n
  FRAGMENT'S CLUE THERE.\n
  \n
  THE LAST FRAGMENT'S CLUE:
  +,-,+,*,-,+
  \n
  \n`;
		// multiply by 2, then add the sum of digits
		// answer is 180
	} else if (fragment === "4") {
		output = `
  ~ROGUE_ROOT: THE LAST FRAGMENT, NOT GOING TO BE EASY TO GET.\n
  I'VE TRANSFORMED THIS NUMBER SEVERAL TIMES, YOU HAVE THE VALUES\n
  \n
  BUT ANOTHER FRAGMENT HAS THE OPERATORS\n
  \n
  BEFORE WE GET TO THAT, THE THIRD FRAGMENT'S CLUE:\n
  A = 25, Z = 0
  \n THE LAST FRAGMENT\n
  INITIAL VALUE: 5\n
  VALUES: 6, 3, 7, 10, 7, 4
  \n`;
		// multiply by 2, then add the sum of digits
		// answer is 180
	}
}

export { output };
