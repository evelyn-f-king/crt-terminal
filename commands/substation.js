import { parse, type, prompt, input } from "../util/io.js";
import clear from "./clear.js";
const output = "";

async function reactor() {
  let brand = await prompt(
    `ENTER SUBSTATION B FUSE BRAND:\n
  UNREALCO\n
  FLAWLESSCORP\n
  TOTAL VALUE\n
  FREEDOMCORP\n
  `
  );
  clear();
  if (brand.toLowerCase() === "unrealco") {
    await type([
      "Thank you for choosing UNREALCO!",
      "Our fuses are second to nothing.",
      "Please replace the fuse under the following conditions:",
      "1) It has been at least ten years since the last full reactor reset.",
      "2) Substation is powering at least three refrigeration units."
    ]);
  } else if (brand.toLowerCase() === "flawlesscorp") {
    await type([
      "FlawlessCorp products are the highest quality,",
      "and come with a three day warranty!",
      "The estimated mean time to failure of a FlawlessCorp product is",
      "260 hours, although that is under optimal conditions, which includes",
      "a 24 hour watch and gentle lullabies played on repeat.",
      "FlawlessCorp fuses should be frequently replaced."
    ]);
  } else if (brand.toLowerCase() === "total value") {
    await type([
      "Total Value fuses are designed for long term use.",
      "and can operate in harsh conditions. Do not open fuse",
      "boxes unless reactor temperature exceeds 1,000,000,000,000 Kelvin."
    ]);
  } else if (brand.toLowerCase() === "freedomcorp") {
    await type([
      "Here at FreedomCorp, you're always free to choose our fuses!",
      "Replacing any other fuse first will trigger our patented",
      "Competitor Deterrence Fuse, which will reset the remaining breakers",
      "and make you think twice about switching off of FreedomCorp!"
    ]);
  } else {
    await type("ERROR: Unknown fuse type.");
  }
  await type(["ENTER SUBSTATION COMMAND AGAIN", "TO REQUEST ANOTHER MANUAL"]);
}

export { output };
export default () => reactor();
