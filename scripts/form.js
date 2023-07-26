const form = document.querySelector('form');

// Quand on envoi le formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault(); //empêche le rechargement de la page
    let name = document.getElementById("pokemon_name").value; //On récupère la valeur du champ title
    let img_link = document.getElementById("img_link").value; // On récupère la valeur du textarea
    // Création de la nouvelle div
    let parent_element = document.getElementById("pokemon_container"); 
    let new_pokemon_container = document.createElement("div");
    new_pokemon_container.setAttribute("class", "removable");
    parent_element.appendChild(new_pokemon_container);
    // Création du nom du pokémon
    let new_pokemon_name = document.createElement("p");
    new_pokemon_container.appendChild(new_pokemon_name);
    new_pokemon_name.innerHTML = name;
    // Création de l'image du pokémon via url
    let new_pokemon_img = document.createElement("img");
    new_pokemon_img.setAttribute("src", img_link);
    new_pokemon_container.appendChild(new_pokemon_img);
    //Création des bouttons de suppression
    let remove_button = document.createElement("button");
    remove_button.setAttribute ("id", "remove_button");
    let button_text = document.createTextNode("Remove");
    remove_button.appendChild(button_text);
    new_pokemon_container.appendChild(remove_button);
    // Réinitialisation des champs
    document.getElementById("pokemon_name").value="";
    document.getElementById("img_link").value="insérer le lien de l'image";
    remove_button.addEventListener("click", (event) =>{
        let article = event.target.closest(".removable"); // Sélectionne l'élément parent avec la classe "removable"
        if (article) {
            article.remove(); // Supprime l'élément
        }
    })
    
});

