let pokemonList = [
  { name: 'bulbasaur', height: 0.7, type: ['grass', 'poison']},
  { name: 'ekans', height: 2, type: ['poison']},
  { name: 'fearow', height: 1.2, type: ['flying', 'nomral']},
];




for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height <= 1) {
    document.write(
      pokemonList[i].name + "" + " (height: " + pokemonList[i].height + ") "
    );
  } else {
    document.write(
      pokemonList[i].name + "" + " (height: " + pokemonList[i].height +  ")" + " -Wow, that is big! ");
  }
}
