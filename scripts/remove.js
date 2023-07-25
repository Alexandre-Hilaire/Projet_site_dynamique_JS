// const remove_button = document.getElementById("remove_button");

// function remove (event){
//     let button = event.target;
//     if(button.id == "remove_button"){
//         let elem = document.getElementsByClassName('removable')[0].parentElement;
//         console.log(elem);
//         elem.remove();
//     }
// }

// document.addEventListener("click", remove);
const article = document.getElementById("pokemon_container");

function remove (){
    let button = event.target;
    if(button.id == "remove_button"){
        let elem = document.getElementById('pokemon_container');
        elem.remove();
     }
}

document.addEventListener("click", remove);