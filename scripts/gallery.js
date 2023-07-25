const pics = document.getElementById("pics");
const mozaic_button = document.getElementById("mozaic");
const col_button = document.getElementById("col");

// Boutons options d'affichage
function gallery_col (){
    if (pics.style.flexDirection === "row") {
        pics.style.flexDirection = "column";
        pics.style.justifyContent = "center";
        pics.style.alignItems = "center";
    }
    else{
        pics.style.flexDirection = "column";
        pics.style.justifyContent = "center";
        pics.style.alignItems = "center";
    }
}
function gallery_mozaic (){
    if (pics.style.flexDirection === "column") {
        pics.style.flexDirection = "row";
    }
    else{
        pics.style.flexDirection = "row";
    }
}
col_button.addEventListener("click", gallery_col);
mozaic_button.addEventListener("click", gallery_mozaic);

//Feature d'ajout d'image
function add_img (){
    
    let url = prompt("Entrez l\'url de la nouvelle image");
    let parent_element = document.getElementById("pics")
    let new_img = document.createElement("img");
    new_img.setAttribute("src", url);
    new_img.setAttribute("class", "pic");
    parent_element.appendChild(new_img);

}
add_pics.addEventListener("click", add_img);