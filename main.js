import { selectCharacterQuotes } from "./advice-generator.js";

// Format each character's name with their quote.
function formatMessage(characterName, quote) {
  const verbs = ["responds", "answers", "suggests", "advises", "speaks"];
  const randomIndex = Math.floor(Math.random() * verbs.length);
  const verb = verbs[randomIndex];
  return `${characterName} ${verb}: '${quote}' \n`;
}

function panelResponds(userInput = undefined) {
  // TO DO: prompt the user for a question
  console.log(
    `\nYou approach a panel of legendary figures, their forms obscured.`
  );

  const responses = selectCharacterQuotes(userInput);

  console.log(
    `You speak nothing, yet ${responses.length} figures step forward from the mist.\n`
  );
  responses.forEach((response) => {
    const name = response[0];
    const quote = response[1];
    const reply = formatMessage(name, quote);
    console.log(reply);
  });
}

panelResponds();
