const form = document.querySelector('form');

// Quand on envoi le formulaire
form.addEventListener("submit", (event) => {
    event.preventDefault(); //empêche le rechargement de la page
    const title = document.getElementById("title").value; //On récupère la valeur du champ title
    const article_content = document.getElementById("article_content").value; // On récupère la valeur du textarea
    console.log(title); // On affiche les valeurs pour vérifier que tout fonctionne 
    console.log(article_content);
});