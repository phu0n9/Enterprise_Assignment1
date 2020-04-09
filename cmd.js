// Navigation bar
function clickableNavBar(n){
    var navBarItem = document.getElementsByClassName('navSection');
    for(var i = 0;i<navBarItem.length;i++){
        navBarItem[i].className = navBarItem[i].className.replace(" navActive","");
    }
    navBarItem[n-1].className += " navActive";
}

var n = 0;
function toggleIconClickCount(){
    var navigationBar = document.querySelector('nav');
    n++;
    if(n % 2 != 0){
        navigationBar.style.display = "block";
    }
    else{
        navigationBar.style.display = "none";
    }
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

//scrolling on service page
function serviceOnScrolling(){
    var sidebarTittle = document.querySelectorAll('#sidebar');
    const y = 1+ (window.scrollY || window.pageYOffset) / 150;
    for (let i = 0; i < sidebarTittle.length; i++) {
        sidebarTittle[i].className = sidebarTittle[i].className.replace(" service-sidebar-tittle-active","");  
    }

    if(y >= 1 && y <= 7){
        sidebarTittle[0].className += " service-sidebar-tittle-active"; 
    }
    else if(y>7 && y< 13){
        sidebarTittle[1].className += " service-sidebar-tittle-active"; 
    }
    else{
        sidebarTittle[2].className += " service-sidebar-tittle-active"; 
    }
}


// Initialize and add the map
function initMap() {
// The location of RMIT
    var rmit = {lat: 10.72986, lng: 106.69408};
    // The map, centered at RMIT
    var map = new google.maps.Map(document.getElementById('mapholder'), {zoom: 4, center: rmit});
    // The marker, positioned at RMIT
    var marker = new google.maps.Marker({position: rmit, map: map});
}


//Form validation
var checkPoint = 0;
function validateName(stringName){
    var lettersOnly = /^[A-Za-z]+$/;
    if(document.getElementById(stringName).value.match(lettersOnly)){
        document.getElementById(stringName).setCustomValidity("");
        checkPoint = 1;
    }
    else{
        document.getElementById(stringName).setCustomValidity("Please enter your name correctly.");
        checkPoint = 0;
    }
}

function validateGender(stringGender){
    var genderOption = document.getElementsByTagName("option");
    for (var i = 0; i < genderOption.length; i++) {
        if(document.getElementById(stringGender).value == genderOption[0].value){
            document.getElementById("gender").setCustomValidity("Please choose your gender");
            document.getElementById("gender").style.border = "1px solid red";
        }
        else{
            document.getElementById("gender").setCustomValidity("");
            document.getElementById("gender").style.border = "1px solid #ccc";
        }
    }
}

function validateEmail(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(document.getElementById("email").value.match(mailformat)) {
    document.getElementById("email").setCustomValidity('');
    checkPoint = 1;
    }
    else{
    document.getElementById("email").setCustomValidity("You have entered an invalid email address!");
    checkPoint = 0;
    }
 }

function validatePhoneNumber(){
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if((document.getElementById('phone').value.match(phoneno))){
        document.getElementById("phone").setCustomValidity('');
        checkPoint = 1;
    }
    else{
        document.getElementById("phone").setCustomValidity("Your phone input is incorrect!");
        checkPoint = 0;
    }   
}

function validateTextArea(){
    var text = document.getElementById("comment-box");
    var textLeft = 300 - text.value.length;
    document.getElementById("counting-text").innerHTML = "only "+ textLeft +" characters left";
    if(text.value == ""){
        text.setCustomValidity("Your question(s) should not be empty.");
        console.log("false");
        checkPoint = 0;
    }
    else{
        text.setCustomValidity('');
        console.log("true");
        checkPoint = 1;
    }
}

function submitQuestion(){
    if(checkPoint){
        alert("Thank you for your question. We will provide the answer(s) through your email soon.");
        window.location.href = "homepage.html";
    }
    else{
        alert("Your input is wrong. Check again.");
    }
}
