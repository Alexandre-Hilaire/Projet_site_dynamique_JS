// const name = document.getElementById("articles");
// fetch("https://pokeapi.co/api/v2/pokemon/")
// .then(response => response.json())
// .then(data => console.log(data.results[0].name))
// .catch(error => alert("erreur : " + error));


function shows_data(data_pokemons){

    let parent_element = document.getElementById("pokemon_container");
    let pokemons_list = [];
    let pokemons_url = [];
    let pokemons_img_url = [];
    for (let i = 0; i < data_pokemons.length; i++) {
        // Créer une div par pokémons
        let pokemon_container = document.createElement("div");
        parent_element.appendChild(pokemon_container);
        
        // Affichage des noms
        pokemons_list[i] = data_pokemons[i].name;
        let pokemon_name = document.createElement("p");
        pokemon_container.appendChild(pokemon_name);
        pokemon_name.innerHTML = pokemons_list[i];
    
        // Affichage des images
        pokemons_url[i] = data_pokemons[i].url;
        fetch(pokemons_url[i])
          .then(response => response.json())
          .then(response => {
            pokemons_img_url[i] = response.sprites.other["official-artwork"].front_default;
            let pokemon_img = document.createElement("img");
            pokemon_img.setAttribute("src", pokemons_img_url[i]);
            pokemon_container.appendChild(pokemon_img);
          });
        
    }
    console.log(data_pokemons);
    console.log(3);
    console.log(pokemons_list);
    console.log(data_pokemons[0].url);
    console.log(pokemons_img_url);

}

console.log(1);
fetch("https://pokeapi.co/api/v2/pokemon/") // Va me chercher les infos à cette url
    .then(response => response.json()) // mets moi les infos dans un .json
    .then(response => shows_data(response.results)); 

console.log(2);
