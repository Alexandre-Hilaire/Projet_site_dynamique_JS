const form = document.querySelector('form');

// Quand on envoi le formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault(); //empêche le rechargement de la page
    let name = document.getElementById("pokemon_name").value; //On récupère la valeur du champ title
    let img_link = document.getElementById("img_link").value; // On récupère la valeur du textarea
    console.log(name); // On affiche les valeurs pour vérifier que tout fonctionne 
    console.log(img_link);
    // Création de la nouvelle div
    let parent_element = document.getElementById("pokemon_container"); 
    let pokemon_container = document.createElement("div");
    pokemon_container.setAttribute("class", "removable");
    parent_element.appendChild(pokemon_container);
    // Création du nom du pokémon
    let pokemon_name = document.createElement("p");
    pokemon_container.appendChild(pokemon_name);
    pokemon_name.innerHTML = name;
    // Création de l'image du pokémon via url
    let pokemon_img = document.createElement("img");
    pokemon_img.setAttribute("src", img_link);
    pokemon_container.appendChild(pokemon_img);
    //Création des bouttons de suppression
    let remove_button = document.createElement("button");
    remove_button.setAttribute ("id", "remove_button");
    let button_text = document.createTextNode("Remove");
    remove_button.appendChild(button_text);
    pokemon_container.appendChild(remove_button);
    // Réinitialisation des champs
    document.getElementById("pokemon_name").value="";
    document.getElementById("img_link").value="insérer le lien de l'image";
});