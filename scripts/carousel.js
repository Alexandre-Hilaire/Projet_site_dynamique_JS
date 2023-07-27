//  Le caroussel
document.addEventListener("DOMContentLoaded", function() {
    let carousels = document.querySelectorAll(".carousel");
    let carousel_index = 0;
    
    function slide (){
        
        if(carousel_index == carousels.length){
            carousel_index = 0;
        }
        carousels.forEach((carousel, i) => { 
            
            if (i == carousel_index){
                carousel.classList.add("active");
                
            }
            else {
                carousel.classList.remove("active");
            }
           
        });
        carousel_index++;
    }
    
    
    
    setInterval(slide, 5000);
    });