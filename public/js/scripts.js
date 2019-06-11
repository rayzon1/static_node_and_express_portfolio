
$(document).foundation()

const thumbnails = document.querySelectorAll(".tnails");


// remove box shadow when thumbnail is clicked.
for(let i = 0; i < thumbnails.length; i ++) {
    thumbnails[i].addEventListener('click', function(e){
        this.style.boxShadow = 'none';
    })
   
}
    
