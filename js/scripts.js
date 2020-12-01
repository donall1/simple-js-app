let pokemonList = [
  { name: 'bulbasaur', height: 0.7, type: ['grass', 'poison']},
  { name: 'ekans', height: 2, type: ['poison']},
  { name: 'fearow', height: 1.2, type: ['flying', 'nomral']},
];

let pokemonRepository = (function (){
let pokemonList = [
  {
    name: "Bulbasar",
    type: ["grass", "poison"],
    height: 0.7
  },
  {
    name: "ekans",
    type: "poison",
    height: 2
  },
  {
    name: "fearow",
    type: ["flying", "normal"],
    height: 1.2
  },
  {
    name: "Diglet",
    type: "ground",
    height: .2
  }
];

function add(pokemon) {
   pokemonList.push(pokemon);
 }
 function getAll() {
   return pokemonList;
 }
 function addListItem(pokemon){
   let pokemonList = document.querySelector(".pokemon-list");
   let listpokemon = document.createElement("li");
   let button = document.createElement("button");
   button.innerText = pokemon.name;
   button.classList.add("button-class");
   listpokemon.appendChild(button);
   pokemonList.appendChild(listpokemon);
   button.addEventListener("click", function(event){showDetails(pokemon.name);})
 }
 function showDetails(pokemon){
   console.log(pokemon);
 }
  return {
 add,
    getAll,
    addListItem,
    showDetails
  };
})();



pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + " (type: " + pokemon.type + ")" + " (height " + pokemon.height + ")" + "<br>");
});
