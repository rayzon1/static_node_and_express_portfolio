$(document).foundation()

const screenshots = document.querySelectorAll(".image");


// create gifs on poster screenshots when hovering
for(let i = 0; i < screenshots.length; i ++) {
    screenshots[i].addEventListener('mouseenter', function(e){
        console.log(e.target);
    })
}
    
