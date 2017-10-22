function checkName() {
    var regEx = new RegExp('<');
    var name = document.getElementById('name').value;

    if (regEx.test(name)){
        console.log("Not a name character");
        document.getElementById('name').style.backgroundColor= 'red';
    }else{
        document.getElementById('name').style.backgroundColor= '';

    }
}

function checkAge() {
    var regEx = new RegExp('[^0-9]');
    var age=document.getElementById('age').value;

    if (regEx.test(age)){
        console.log("Illegal age");
        document.getElementById('age').style.backgroundColor= 'red';
    }else{
        document.getElementById('age').style.backgroundColor= '';

    }
}

function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}


function myAjaxFunction() {
    alert("AJAX call has been made");
}

function validate(){
    if(checkEmail(document.getElementById('email').value)){
        console.log('success!');
        myAjaxFunction();

        var inputs = document.getElementsByClassName('input').value;
        inputs.value= '';

    }else{
        alert("Failed to validate.\nPlease try again");
        console.log('Failed');
    }

}