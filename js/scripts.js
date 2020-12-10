let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }


  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");

    button.innerText = pokemon.name;
    button.classList.add("btn");

    listpokemon.append(button);
    pokemonList.append(listpokemon);

    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }


  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }



  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
      })
  }



  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
      })
  }



  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalHeader = $(".modal-header");
    let modalTitle = $(".modal-title");
    let btnClose = $("#btnClose");

    $("#modal-container").modal("show");

    modalHeader.empty();
    modalTitle.empty();
    modalBody.empty();

    let titleElement = $("<h1>" + pokemon.name + "</h1>");

    let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");

    let weightElement = $("<p>" + "Weight: " + pokemon.weight + "</p>");

    let imageElement = $('<img class="modal-img">');
    imageElement.attr("src", pokemon.imageUrl);

    //
    modalHeader.append(titleElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(imageElement);
    modalHeader.append(btnClose);
  }



  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
    showDetails,
  };
})();



pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
