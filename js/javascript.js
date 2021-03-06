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
    if(document.getElementById('name').value == ""){
        document.getElementById('name').style.backgroundColor="#FF5959";
        document.getElementById('name').style.color="black";
        document.getElementById('name').style.border="3px solid #585858";
        validateFlag = false;
    }
    if(document.getElementById('email').value == ""){
        document.getElementById('email').style.backgroundColor="#FF5959";
        document.getElementById('email').style.border="3px solid #585858";
        validateFlag = false;
    }
    if(document.getElementById('subject').value == ""){
        document.getElementById('subject').style.backgroundColor="#FF5959";
        document.getElementById('subject').style.border="3px solid #585858";
        validateFlag = false;
    }

    if(document.getElementById('message').value == ""){
        document.getElementById('message').style.border="5px solid #FF5959";
        validateFlag = false;
    }
    

    return validateFlag;
}


/**
 * updateField
 * Updated the form inputs depending if has user input
 */
function updateField(dom){
    if(dom.value != ""){
        dom.style.backgroundColor='';
        dom.style.border='';
    }


    if(dom.value == ""){
        dom.style.backgroundColor="#FFFFFF";
        dom.style.border='';
    }
}

function checkMessage(dom){
    if(dom.value != ""){
        dom.style.backgroundColor='';
        dom.style.border='';
    }
}