let users = document.querySelector("#users");
let user = document.querySelector("#user");
let links = document.querySelector("#links");
let logout = document.querySelector("#logout");
let username = localStorage.getItem("username");
if (username) {
  console.log(users);
  links.remove();
  users.style.display = "flex";
  user.innerHTML = username;
}
logout.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});
