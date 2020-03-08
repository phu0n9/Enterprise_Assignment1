// Navigation bar
function clickableNavBar(stringID){
    for(var i = 0;i <document.getElementsByTagName('a').length;i++){
        document.getElementsByTagName('a')[i].style.color = 'black';
        document.getElementsByTagName('a')[i].style.textDecoration = 'none';
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