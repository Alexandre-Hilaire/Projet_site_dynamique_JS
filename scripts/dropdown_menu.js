const dropdown_button = document.getElementById("dropdown_button"); // Bouton qui ouvre le menu
const dropdown_menu = document.getElementById("dropdown_menu");

function toggle_dropdown () {
    if (dropdown_menu.style.display === "none"){ // On change la propriété CSS du menu pour le faire apparaître
        dropdown_menu.style.display = "block";
    }
    else {
        dropdown_menu.style.display = "none";
    }
}

dropdown_button.addEventListener("click", toggle_dropdown); // Si l'élément est cliqué éxécute la fonction d'affichage