const form = document.querySelector('form');

// Quand on envoi le formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault(); //empêche le rechargement de la page
    const title = document.getElementById("title").value; //On récupère la valeur du champ title
    const article_content = document.getElementById("article_content").value; // On récupère la valeur du textarea
    console.log(title); // On affiche les valeurs pour vérifier que tout fonctionne 
    console.log(article_content);
    // Création de la nouvelle div
    let parent_element = document.getElementById("pokemon_container"); 
    let pokemon_container = document.createElement("div");
    parent_element.appendChild(pokemon_container);
    // Création du nom du pokémon
    let pokemon_name = document.createElement("p");
    pokemon_container.appendChild(pokemon_name);
    pokemon_name.innerHTML = title;
    // Création de l'image du pokémon via url
    let pokemon_img = document.createElement("img");
    pokemon_img.setAttribute("src", article_content);
    pokemon_container.appendChild(pokemon_img);
});