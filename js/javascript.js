// Brandon Mok
// Javascript

// Navigation - Open & Close
// Changes width of div to display
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


// Alert message for submitting form
function doAlert(){
    alert("Thank you for sending a message!")
}


function val(){
    var validateFlag = true;

    // Checking if the fields are empty, if so don't allow the form to submit
    if(document.getElementById('fullName').value == ""){
        document.getElementById('fullName').style.backgroundColor="#EF5C51";
        validateFlag = false;
    }
    if(document.getElementById('subject').value == ""){
        document.getElementById('subject').style.backgroundColor="#EF5C51";
        validateFlag = false;
    }
    if(document.getElementById('email').value == ""){
        document.getElementById('email').style.backgroundColor="#EF5C51";
        validateFlag = false;
    }

    if(validateFlag == true){
        doAlert();
    }

    return validateFlag;
}


/**
 * updateField
 * Updated the form inputs depending if has user input
 */
function updateField(dom){
    dom.style.backgroundColor="#EF5C51";

    if(dom.value == ""){
        dom.style.backgroundColor="#FFFFFF";
    }
}



/** Slide show */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides"); // Get all slides
    
    if(n > slides.length){ // If over the # of slides
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display="block"; 
}
