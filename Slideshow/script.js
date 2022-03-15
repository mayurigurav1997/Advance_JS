(function(){
    "use strict";

const myImages = ["../Cat/Cat1.jpg","../Cat/Cat2.jpg","../Cat/Cat3.jpg","../Cat/Cat4.jpg","../Cat/Cat5.jpg","../Cat/Cat6.jpg","../Cat/Cat7.jpg","../Cat/Cat8.jpg"];

let currentImage = 0;

//Event Handler
document.getElementById('next').onclick = nextPhoto;

function nextPhoto(){
    currentImage++;
    if(currentImage>myImages.length-1){
        currentImage=0;
    }
    document.getElementById('myImage').src = myImages[currentImage];
}

//Event Handler
document.getElementById('previous').onclick = previousPhoto;

function previousPhoto(){
    currentImage--;
    if(currentImage<0){
        currentImage = myImages.length-1;
    }
    document.getElementById('myImage').src = myImages[currentImage];
}
        
})();