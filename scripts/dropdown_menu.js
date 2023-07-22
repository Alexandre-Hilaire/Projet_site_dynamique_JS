const dropdown_button = document.getElementById("dropdown_button");
const dropdown_menu = document.getElementById("dropdown_menu");

function toggle_dropdown () {
    if (dropdown_menu.style.display === "none"){
        dropdown_menu.style.display = "block";
    }
    else {
        dropdown_menu.style.display = "none";
    }
}

dropdown_button.addEventListener("click", toggle_dropdown);