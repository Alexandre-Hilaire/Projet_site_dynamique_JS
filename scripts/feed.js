// const name = document.getElementById("articles");
// fetch("https://pokeapi.co/api/v2/pokemon/")
// .then(response => response.json())
// .then(data => console.log(data.results[0].name))
// .catch(error => alert("erreur : " + error));


function shows_data(data_pokemons){


    let pokemons_list = [];
    let pokemons_url = [];
    for (let i = 0; i < data_pokemons.length; i++){
        pokemons_list[i] = data_pokemons[i].name;
        let pokemon_name = document.createElement("p");
        let parent_element = document.getElementById("articles");
        parent_element.appendChild(pokemon_name);
        let pokemons_name_container = document.querySelector("articles");
        pokemon_name.innerHTML = pokemons_list[i];
    }
    console.log(data_pokemons);
    console.log(3);
    console.log(pokemons_list);
    console.log(data_pokemons[0].url);

}

console.log(1);
fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then(response => shows_data(response.results));

console.log(2);

