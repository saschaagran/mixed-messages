import { allCharacters, randomCharacter, randomQuote } from "./characters.js";

function zip(list1, list2) {
  return list1.map((element, i) => {
    return [element, list2[i]];
  });
}

export function selectCharacterQuotes(userInput) {
  let charactersSelected = [];
  let quotesSelected = [];
  // If any of the words in the user's input match a quote title by any character, select that quote
  if (userInput !== undefined) {
    allCharacters.forEach((character) => {
      const allQuotes = Object.keys(character.quotes);
      allQuotes.forEach((quote) => {
        if (userInput.toLowerCase().includes(quote)) {
          charactersSelected.push(character.name);
          quotesSelected.push(character.quotes[quote]);
        }
      });
    });
  }

  //If there are fewer than 3 quotes selected, choose quotes randomly until three are selected
  while (quotesSelected.length < 3) {
    let characterToAdd = randomCharacter();
    let characterName = characterToAdd.name;
    // Make sure that only 1 quote from each character is chosen
    while (charactersSelected.includes(characterName)) {
      characterToAdd = randomCharacter();
      characterName = characterToAdd.name;
    }
    charactersSelected.push(characterName);
    // Choose a random quote from that character
    quotesSelected.push(randomQuote(characterToAdd));
  }

  const charactersAndQuotes = zip(charactersSelected, quotesSelected);
  return charactersAndQuotes;
}
