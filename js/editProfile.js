let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");

let userInput = document.getElementById("changeName");
let emailInput = document.getElementById("changeEmail");
let editProfileBtn = document.getElementById("edit-profile-btn")
let editProfileForm = document.getElementById("edit-profile-form")


userInput.value = get_user;
emailInput.value = get_email;

editProfileForm.addEventListener('submit',editProfileData)

function editProfileData(e){
    e.preventDefault();
    localStorage.setItem("username",userInput.value)
    localStorage.setItem("email",emailInput.value)
    setTimeout( ()=>{
        window.location = "profile.html"
    },500)
}
