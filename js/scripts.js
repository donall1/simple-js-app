let pokemonRepository = (function (){
  let pokemonList = [
    {
      name: "Bulbasar",
      type: ["grass", "poison"],
      height: 0.7
    },
    {
      name: "Ekans",
      type: "poison",
      height: 2
    },
    {
      name: "Fearow",
      type: ["flying", "normal"],
      height: 1.2
    },
    {
      name: "Weddle",
      type: ["bug, poison"],
      height: 1
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

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
