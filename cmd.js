// Navigation bar
function clickableNavBar(stringID){
    for(var i = 0;i <document.getElementsByClassName('navSection').length;i++){
        document.getElementsByClassName('navSection')[i].style.color = 'black';
        document.getElementsByClassName('navSection')[i].style.textDecoration = 'none';
    }
    document.getElementById(stringID).style.color = 'rgb(219, 78, 13)';
    document.getElementById(stringID).style.textDecoration = 'underline';
}

//Combine functions
function action(){
  carousel();
  // getLocation();
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
    setTimeout(carousel, 7000); // Change image every 10 seconds
}

//Form validation
//FIXME:sticky navigation bar + form validation +smooth scroll
var flag = 0;
function checkPassword(){
    if((document.getElementById("psw").value == document.getElementById("repsw").value)){
        document.getElementById("repsw").setCustomValidity('');
        // flag = 1;
    }
    else{
        document.getElementById("repsw").setCustomValidity("Passwords don't match");
        // flag = 0;
    }
 }


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

 function nextBtn(){
    if(checkPassword() && myForm.uname.value != ""){
        document.getElementsByClassName('form-section')[1].style.display = 'block';
        document.getElementsByClassName('form-section')[0].style.display = 'none';
        document.getElementById('stageBtn')[0].style.color = 'rgb(29, 146, 29)';
        return true;
    }
    else{
        alert('Check your input again.');
        return false;
    }
 }


//product section
function clickSection(stringID){
    if(stringID == 'filmRollSection'){
        document.getElementsByClassName('grid-container')[0].style.display = "grid";
        document.getElementsByClassName('grid-container')[1].style.display = "none";
    }
    else if(stringID == 'filmCameraSection'){
        document.getElementsByClassName('grid-container')[0].style.display = "none";
        document.getElementsByClassName('grid-container')[1].style.display = "grid";
    }
}





















// Geolocation
var x = document.getElementById("map");
function getLocation(){
    var optn = {enableHighAccuracy : true,timeout : Infinity,maximumAge : 0};
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(getPosition,showError,optn);
    }
    else{
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getPosition(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    x.innerHTML = "Latitude: " + lat + "<br>Longitude: " + long;
}

function showError(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}