const pics = document.getElementById("pics");
const mozaic_button = document.getElementById("mozaic");
const col_button = document.getElementById("col");

function gallery_col (){
    if (pics.style.flexDirection === "row") {
        pics.style.flexDirection = "column";
    }
    else{
        pics.style.flexDirection = "row";
    }
}
function gallery_mozaic (){
    if (pics.style.flexDirection === "column") {
        pics.style.flexDirection = "row";
    }
    else{
        pics.style.flexDirection = "column"
    }
}
col_button.addEventListener("click", gallery_col);
mozaic_button.addEventListener("click", gallery_mozaic);
