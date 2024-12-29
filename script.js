const inputLable = document.getElementById("input-file");
const inputFile = document.getElementById("file");
const inputeEmail = document.getElementById("inputeEmail");
const inputName = document.getElementById("inputName");
const inputGithub = document.getElementById("inputGithub");
const btn = document.getElementById("btn");
const emailError = document.getElementById("emailError");
const fileError = document.getElementById("fileError");
const uploadImage = document.querySelector(".image");
const uploadInnerImage  = document.querySelector(".image img");
const buttons = document.querySelector(".buttons");
const formContainer = document.getElementById("form");
const ticket = document.getElementById("ticket")
const form = document.forms[0];
let localImage;
let validMaile;
let validImag
form.addEventListener("submit" , function (e) {
    e.preventDefault();
    if(!(/^\w+@[a-z]+\.[a-z]{2,}/g).test(inputeEmail.value)) {
        emailError.style.visibility = "visible";
        validMaile = false ; 
    }else {
        validMaile = true;
        emailError.style.visibility = "hidden";
    };
    if(inputName.value == "") {
        document.getElementById("nameError").style.visibility = "visible";
    }else {
        document.getElementById("nameError").style.visibility = "hidden";
    }
    if(inputGithub.value == "") {
        document.getElementById("gitError").style.visibility = "visible";
    }else {
        document.getElementById("gitError").style.visibility = "hidden";
    }
    if(validImag && validMaile && inputName.value != "" && inputGithub.value != "") {
       formContainer.style.display = "none" ;
        ticket.style.display = "block";
        createTicket()
    }
})
inputFile.onchange = function () {
    let url = URL.createObjectURL(this.files[0]);
    if(this.files[0].size <= 512000) {
        localImage = url;
        buttons.style.display = "flex"
        document.getElementById("p").style.display = "none" ;
        uploadInnerImage.style.display = "none" 
        uploadImage.style.backgroundImage = `url(${url})`;
        fileError.style.color = "hsl(252, 6%, 83%)";
        validImag = true

    }else {
        uploadInnerImage.style.display = "block" 
        uploadImage.style.backgroundImage = ``;
        fileError.style.color = "hsl(7, 71%, 60%)"
        validImag = false
    }
}
buttons.children[0].addEventListener("click" , function () {
    uploadInnerImage.style.display = "block" 
    uploadImage.style.backgroundImage = ``;
})
buttons.children[1].addEventListener("click" , function () {
    inputFile.click()
})

function createTicket() {
    const names = document.querySelectorAll(".tecet-contents .name");
    names.forEach((n) => {
        n.innerHTML = inputName.value;
        document.getElementById("gitUser").innerHTML = inputGithub.value;
        document.getElementById("ticketImg").src = localImage
    })
}