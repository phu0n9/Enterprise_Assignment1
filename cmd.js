// Navigation bar
function clickableNavBar(n){
    var navBarItem = document.getElementsByClassName('navSection');
    for(var i = 0;i<navBarItem.length;i++){
        navBarItem[i].className = navBarItem[i].className.replace(" navActive","");
    }
    navBarItem[n-1].className += " navActive";
}

//Slides
var slideIndex = 0;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
function fowardSlides(n){
    var newSlideIndex = slideIndex + n;
    if(newSlideIndex <= slides.length && newSlideIndex > 0){
        currentSlides(newSlideIndex);
    }  
    else if (newSlideIndex > slides.length) {slideIndex = 0} 
    else if(newSlideIndex == 0){slideIndex = slides.length+1}
}

function currentSlides(n){
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotActive", "");
    }
    slideIndex = n;
    slides[n-1].style.display = "block"; 
    dots[n-1].className += " dotActive";
}

function carousel() {
    for(var i = 0;i<slides.length;i++){
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotActive", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dotActive"; 
    setTimeout(carousel, 7000); // Change image every 7 seconds
}



//service section movement
var sectionBox = document.getElementsByClassName("service-section-box");
var imageBox = document.getElementsByClassName("service-image-box");

function mouseOverServiceSection(n){
    for(var i = 0;i<imageBox.length;i++){
            imageBox[i].className = imageBox[i].className.replace(" upAndDown","");
    }
    imageBox[n-1].className += " upAndDown";
}


//Form validation
//FIXME:sticky navigation bar + form validation +smooth scroll
var flag = 0;

 function validateEmail(){
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(document.getElementById("email").value.match(mailformat)) {
         document.getElementById("email").setCustomValidity('');
         flag = 1;
     }
     else{
         document.getElementById("email").setCustomValidity("You have entered an invalid email address!");
         flag = 0;
     }
 }

 function phonenumber(){
     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     if((document.getElementById('phone').value.match(phoneno))){
         document.getElementById("phone").setCustomValidity('');
         flag = 1;
     }
     else{
         document.getElementById("phone").setCustomValidity("Your phone input is incorrect!");
         flag = 0;
     }   
 }
