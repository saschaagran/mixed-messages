import * as characters from "./characters.js";

function zip(list1, list2) {
  return list1.map((element, i) => {
    return [element, list2[i]];
  });
}

function selectCharacterQuotes(userInput) {
  let charactersSelected = [];
  let quotesSelected = [];
  // If any of the words in the user's input match a quote title by any character, select that quote
  for (let character in characters.allCharacters) {
    // const allQuotes = Object.keys(character);
    for (let quote in character.quotes) {
      if (userInput.indexOf(quote) != -1) {
        quotesSelected.push(character.quote);
        charactersSelected.push(character);
      }
    }
  }

  //If there are fewer than 3 quotes selected, choose quotes randomly until three are selected
  while (quotesSelected.length < 3) {
    let characterToAdd = characters.randomCharacter();
    let characterName = characterToAdd.name;
    // Make sure that only 1 quote from each character is chosen
    while (charactersSelected.indexOf(characterName) != -1) {
      characterToAdd = characters.randomCharacter();
      characterName = characterToAdd.name;
    }
    charactersSelected.push(characterName);
    // Choose a random quote from that character
    quotesSelected.push(characters.randomQuote(characterToAdd));
  }

  const charactersAndQuotes = zip(charactersSelected, quotesSelected);
  return charactersAndQuotes;
}

console.log(selectCharacterQuotes("love"));
