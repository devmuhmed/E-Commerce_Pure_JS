let username = document.querySelector("input[name=username]");
let email = document.querySelector("input[name=email]");
let password = document.querySelector("input[name=password]");
let signUpBtn = document.querySelector("input[type=submit]");
signUpBtn.addEventListener("click", register);
function register(e) {
  e.preventDefault();
  if (username.value === "" || email.value === "" || password.value === "") {
    alert("please fill data");
  } else {
    localStorage.setItem("username", username.value.trim());
    localStorage.setItem("email", email.value.trim());
    localStorage.setItem("password", password.value);
    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  }
}
