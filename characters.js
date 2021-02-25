// Collection of Characters
const allCharacters = [severian, estraven, essun, aragorn, mogget];

// Individual Characters
const severian = {
  //Quotes from Severian in The Book of the New Sun by Gene Wolfe
  _time:
    "I felt that pressure of time that is perhaps the surest indication we have left childhood behind.",
  get time() {
    return this._time;
  },

  _books:
    "I was sitting there, as I said, and had been for several watches, when I came to me that I was reading no longer. For some time I was hard put to say what I had been doing. When I tried, I could only think of certain odors and textures and colors that seemed to have no connection with anything discussed in the volume I held. At last I realized that instead of reading it, I had been observing it as a physical object. The red I recalled came from the ribbon sewn to the headband so that I might mark my place. The texture that tickled my fingers still was that of the paper in which the book was printed. The smell in my nostrils was old leather, still wearing the traces of birch oil. It was only then, when I saw the books themselves, when I began to understand their care.",
  get books() {
    return this._books;
  },

  _lies: "Time turns our lies into truth.",
  get lies() {
    return this._lies;
  },

  _symbols:
    "We believe that we invent symbols. The truth is that they invent us; we are their creatures, shaped by their hard defining edges.",
  get symbols() {
    return this._symbols;
  },

  _gifts: "When a gift is deserved, it is not a gift but a payment.",
  get gifts() {
    return this._gifts;
  },

  _beginning:
    "I began, as most young people do, by reading the books I enjoyed. But I found that narrowed my pleasure, in time, until I spent most of my hours searching for such books. Then I devised a plan of study for myself, tracing obscure sciences, one after another, from the dawn of knowledge to the present. Eventually I exhausted even that, and beginning at the great ebony case that stands in the center of the room we of the library have maintained for three hundred years against the return of the Autarch Sulpicius (and into which, in consequence, no one ever comes) I read outward for a period of fifteen years, often finishing two books in one day.",
  get beginning() {
    return this._beginning;
  },

  _theology:
    "One can't found a novel theology on Nothing, and nothing is so secure a foundation as a contradiction. Look at the great successes of the past--they say their deities are the masters of all universes, and yet they require grandmothers to defend them, as if they were children frightened by poultry. Or that the authority that punishes no one while there exists a chance for reformation will punish everyone when there is no possibility anyone will become better for it.",
  get theology() {
    return this._theology;
  },

  _answers:
    "Do you think there are answers to everything here? Is that true in the place you come from?",
  get answers() {
    return this._answers;
  },

  _commerce:
    "In our commercial society, one may set one's price as high as one wishes, but to refuse to sell at any price is treason.",
  get commerce() {
    return this._commerce;
  },

  _love:
    "I have found always that the pattern of our guild is repeated [...] in the societies of every trade, so that they are all of them torturers, just as we. His quarry stands to the hunter as our clients to us; those who buy to the tradesman; the enemies of the Commonwealth to the soldier; the governed to the governors; men to women. All love what they destroy.",
  get love() {
    return this._love;
  },

  _courage:
    "There is no other difference between those who are called courageous and those who are branded craven than that the second are fearful before the danger and the first after.",
  get courage() {
    return this._courage;
  },

  _gratitude:
    "I have often heard it said that gratitude is not to be found. That is not true—those who say so have always looked in the mistaken place. One who truly benefits another is for that moment at a level with the Pancreator, and in gratitude for that elevation will serve the other all his days.",
  get gratitude() {
    return this._gratitude;
  },

  _science:
    "The progress of science depends much less upon theoretical considerations or systematic investigation than is commonly believed, but rather on the transmittal of reliable information, gained by chance or insight from one set of men to their successors. The nature of those who hunt after dark knowledge is to hoard it even unto death, or to transmit it so wrapped in disguise and beclouded with self-serving lies that it is of little value.",
  get science() {
    return this._science;
  },

  _miracles:
    "If I had seen one miracle fail, I had witnessed another; and even a seemingly purposeless miracle is an inexhaustible source of hope, because it proves to us that since we do not understand everything, our defeats—so much more numerous than our few and empty victories—may be equally specious",
  get miracles() {
    return this._miracles;
  },

  _war:
    "War is not a new experience; it is a new world. Its inhabitants are more different from human beings that Famulimus and her friends. Its laws are new, and even its geography is new, because it is a geography in which insignificant hills and hollows are lifted to the importance of cities. Just as our familiar Urth holds such monstrosities as Erebus, Abaia and Arioch, so the world of war is stalked by monsters called battles, whose cells are individuals but who have a life and intelligence of their own, and whom one approaches through an ever-thickening array of portents.",
  get war() {
    return this._war;
  },

  _resolution:
    "Resolution and a plan are better than a sword, because a man whets his own edges on them.",
  get resolution() {
    return this._resolution;
  },

  _fear:
    "Fear is like those diseases that disfigure the face with running sores. One becomes almost more afraid of their being seen than of their source, and comes to feel not only disgraced but defiled.",
  get fear() {
    return this._fear;
  },

  // Create a collection of all of the character's quotes
  _allQuotes: [
    this.answers,
    this.beginning,
    this.books,
    this.commerce,
    this.courage,
    this.fear,
    this.gifts,
    this.gratitude,
    this.lies,
    this.love,
    this.miracles,
    this.resolution,
    this.science,
    this.symbols,
    this.theology,
    this.time,
    this.war,
  ],
  get allQuotes() {
    return this._allQuotes;
  },

  // Choose a random quote
  random() {
    const index = Math.floor(Math.random * this.allQuotes.length);
    return this.allQuotes[index];
  },
};

const estraven = {
  // Quotes from Therem Harth rem ir Estraven in The Left Hand of Darkness by Ursula K. Le Guin
  _patriotism:
    "How does one hate a country, or love one?... I know people, I know towns, farms, hills and rivers and rocks, I know how the sun at sunset in autumn falls on the side of a certain plowland in the hills; but what is the sense of giving a boundary to all that, of giving a name and ceasing to love where the name ceases to apply? What is the love of one's country; is it hate of one's uncountry? Then it's not a good thing.",
  get patriotism() {
    return this._patriotism;
  },

  _action:
    "When action grows unprofitable, gather information; when information grows unprofitable, sleep.",
  get action() {
    return this._action;
  },

  _nationalism:
    "No, I don't mean love, when I say patriotism. I mean fear. The fear of the other. And its expressions are political, not poetical: hate, rivalry, aggression.",
  get nationalism() {
    return this._nationalism;
  },

  _timing:
    "I never had a gift but one, to know when the great wheel gives to a touch, to know and act.",
  get timing() {
    return this._timing;
  },

  _safety:
    "What good seeking the safe course, on a journey such as this? There are senseless courses, which I shall not take; but there is no safe one.",
  get safety() {
    return this._safety;
  },

  // Create a collection of all of the character's quotes
  _allQuotes: [
    this.patriotism,
    this.nationalism,
    this.action,
    this.timing,
    this.safety,
  ],
  get allQuotes() {
    return this._allQuotes;
  },

  // Choose a random quote
  random() {
    const index = Math.floor(Math.random * this.allQuotes.length);
    return this.allQuotes[index];
  },
};

const essun = {
  // Quotes from Essun / Damaya / Syenite from The Fifth Season by N.K. Jemisin
  _home: "Home is what you take with you, not what you leave behind",
  get home() {
    return this._home;
  },

  _relationships:
    "After all, a person is herself, and others. Relationships chisel the final shape of one's being. I am me, and you.",
  get relationships() {
    return this._relationships;
  },

  _smiling:
    "There is an art to smiling in a way that others will believe. It is always important to include the eyes; otherwise, people will know you hate",
  get smiling() {
    return this._smiling;
  },

  _exploitation:
    "For a society build on exploitation, there is no greater threat than having no one left to oppress.",
  get exploitation() {
    return this._exploitation;
  },

  _control:
    "No need for guards when you can convince people to collaborate in their own internment.",
  get control() {
    return this._control;
  },

  _innocence:
    "Say nothing to me of innocent bystanders, unearned suffering, heartless vengeance. When a comm builds atop a fault line, do you blame its walls when they inevitably crush the people inside? No; you blame whoever was stupid enough to think they could defy the laws of nature forever. Well, some worlds are built on a fault line of pain, held up by nightmares. Don’t lament when those worlds fall. Rage that they were built doomed in the first place.",
  get innocence() {
    return this._innocence;
  },

  _love: "When the world is hard, love must be harder still.",
  get love() {
    return this._love;
  },

  _endgame:
    "Sometimes it is the how of a thing, not just the endgame, that matters most.",
  get endgame() {
    return this._endgame;
  },

  // Create a collection of all of the character's quotes
  _allQuotes: [
    this.home,
    this.relationships,
    this.smiling,
    this.exploitation,
    this.control,
    this.innocence,
    this.love,
    this.endgame,
  ],
  get allQuotes() {
    return this._allQuotes;
  },

  // Choose a random quote
  random() {
    const index = Math.floor(Math.random * this.allQuotes.length);
    return this.allQuotes[index];
  },
};

const aragorn = {
  //Quotes from Aragorn son of Arathorn in The Lord of The Rings by J.R.R. Tolkien
  _valor:
    "A time may come soon, when none will return. Then there will be need of valour without renown, for none shall remember the deeds that are done in the last defence of your homes. Yet the deeds will not be less valiant because they are unpraised.",
  get valor() {
    return this._valor;
  },

  _hunted:
    "A hunted man sometimes wearies of distrust and longs for friendship.",
  get hunted() {
    return this._hunted;
  },

  _haste: "The hasty stroke goes oft astray.",
  get haste() {
    return this._haste;
  },

  _afterlife:
    "In sorrow, we must go, but not in despair. Behold! we are not bound for ever to the circles of the world, and beyond them is more than memory.",
  get afterlife() {
    return this._afterlife;
  },

  _morals: "Good and ill have not changed since yesteryear.",
  get morals() {
    return this._morals;
  },

  // Create a collection of all of the character's quotes
  _allQuotes: [
    this.valor,
    this.hunted,
    this.haste,
    this.afterlife,
    this.morals,
  ],
  get allQuotes() {
    return this._allQuotes;
  },

  // Choose a random quote
  random() {
    const index = Math.floor(Math.random * this.allQuotes.length);
    return this.allQuotes[index];
  },
};

const mogget = {
  // Quotes from Mogget in The Abhorsen Trilogy and Clariel by Garth Nix
  _life:
    "Fish and fowl, warm sun and shady tress, the field mice in the wheat, under the cool light of the moon.",
  get life() {
    return this._life;
  },

  _doing: "It's always better to be doing",
  get doing() {
    return this._doing;
  },

  _kissing: "You have to start kissing someone sometime, I suppose.",
  get kissing() {
    return this._kissing;
  },

  _wet:
    "Wake me when whatever terrible thing is about to happen happens, or if it appears I might get wet.",
  get wet() {
    return this._wet;
  },

  _permission:
    "I am a great believer that anything not expressly forbidden is explicitly allowed.",
  get permission() {
    return this._permission;
  },

  _time: "Time plays tricks between here and home",
  get time() {
    return this._time;
  },

  // Create a collection of all of the character's quotes
  _allQuotes: [
    this.life,
    this.doing,
    this.kissing,
    this.wet,
    this.permission,
    this.time,
  ],
  get allQuotes() {
    return this._allQuotes;
  },

  // Choose a random quote
  random() {
    const index = Math.floor(Math.random * this.allQuotes.length);
    return this.allQuotes[index];
  },
};
