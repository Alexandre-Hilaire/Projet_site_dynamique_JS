const form = document.querySelector('form');


// Quand on envoi le formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault(); //empêche le rechargement de la page

    let name = document.getElementById("pokemon_name").value.trim(); //On récupère la valeur du champ title //.trim() pour retirer les espaces dans les champs saisis
    let img_link = document.getElementById("img_link").value.trim(); // On récupère la valeur du textarea


    //Validation du formulaire
    let name_html = document.getElementById("pokemon_name");
    let url_html = document.getElementById("img_link");

    // Vérification des champs vides
    if (name === "" || img_link === "") {
        if (name === "") {
            name_html.style.backgroundColor = "red";
            name_html.setAttribute("placeholder", "Ce champ est vide");
        }
        else {
            name_html.style.backgroundColor = "none";
        }

        if (img_link === "") {
            url_html.style.backgroundColor = "red";
            url_html.setAttribute("placeholder", "Ce champ est vide");
        }
        else {
            url_html.style.backgroundColor = "none";
        }

        return; // Pour empêcher de créer le reste des éléments
    }
    // Utilisation des Regex (expréssions régulières) pour filtrer les réponses
    let name_regex = /^[A-Za-z\s]+$/; // Celui çi pour s'assurer que le champ nom est composé de majuscules, minuscles ou espaces
    let img_link_regex = /^(http|https):\/\/[^ "]+$/; // Celui çi pour s'assure que l'URL rentré est valide
    // On récupère les p pour les erreurs
    let name_error_html = document.getElementById("name_error");
    let img_url_error_html = document.getElementById("img_link_error");
    //Pour le nom
    if (!name_regex.test(name)) {
        name_html.value = ""; //On vide les champs en cas d'erreur
        name_html.style.backgroundColor = "red";
        name_error_html.innerText = "Ce champ doit contenir une chaîne de caractères valide"; // introduire le message d'erreur dans le p vide
        name_error_html.classList.add("error");
        return;
    }
    else {
        name_html.style.backgroundColor = "none";
        name_error_html.innerText = ""; //Effacer le message d'erreur si valide
    }
    //Pour l'url
    if (!img_link_regex.test(img_link)) {
        url_html.value = "";
        url_html.style.backgroundColor = "red";
        img_url_error_html.innerText = "Ce champ doit contenir une URL valide";
        img_url_error_html.classList.add("error");
        return;
    }
    else {
        url_html.style.backgroundColor = "none";
        url_html.setAttribute("placeholder", "");
    }
    //Fin de vérification du formulaire

    //Création du nouvel élément

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
    remove_button.setAttribute("id", "remove_button");
    let button_text = document.createTextNode("Remove");
    remove_button.appendChild(button_text);
    new_pokemon_container.appendChild(remove_button);
    // Réinitialisation des champs
    document.getElementById("pokemon_name").value = "";
    document.getElementById("img_link").value = "insérer le lien de l'image";
    remove_button.addEventListener("click", (event) => {
        let article = event.target.closest(".removable"); // Sélectionne l'élément parent avec la classe "removable"
        if (article) {
            article.remove(); // Supprime l'élément
        }
    })

});

