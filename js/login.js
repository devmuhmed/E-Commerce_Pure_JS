let username = document.querySelector("input[name = username]");
let password = document.querySelector("input[name = password]");
let signInBtn = document.querySelector("input[type = submit]");
let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");
signInBtn.addEventListener("click", login);
function login(e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("please fill data");
  } else {
    if (
      getUser &&
      getUser === username.value.trim() &&
      getPassword === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      alert("username or password is wrong refill it again");
    }
  }
}
