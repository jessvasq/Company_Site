let emailId = document.contactForm.email.value;

function validateEmail(email){
    if (!email) {
        return false;
    }
    //check for @ character and if there are characters before @
    const atPos = email.indexOf("@");
    const dotPos = email.lastIndexOf(".");

    if (atPos === -1 || atPos === 0){
        return false;
    }

    //check for at least one character after @, one character between @ and .
    if (dotPos === -1 || dotPos === atPos + 1 || dotPos - atPos === 1){
        return false;
    }

    //check if the email contains special characters besides (letters, dots, @, -, _)
    const specialChars = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
    //test() returns a boolean and checks if a string matches the special characters
    if(specialChars.test(email)){
        return false
    }
    else {
        return true;
}
}

function validateData() {
    let userName = document.contactForm.name.value;
    let emailVal = document.contactForm.email.value;
    let message = document.contactForm.message.value;

    if (userName){
        let userNameVal = document.getElementById("name").value;
    }else{
        alert("Please provide your name");
        userName.focus();
        return false;
    }

    if (emailVal && validateEmail(emailVal) === true) {
        let emailValue = document.getElementById("email").value;
        console.log(emailValue)
    } else {
        alert("There was an error in your email. Please enter email.");
        document.contactForm.email.focus() ;
        return false;
    }


    if(!message){
        alert("Please enter your Message!");
        document.contactForm.message.focus() ;
        return false;
    }else{
        let messageValue = document.getElementById("message").value;
    }
    return true;
}