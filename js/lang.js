let arabic = document.getElementById("arabic");
let english = document.getElementById("english");

arabic.addEventListener("click", changeDirArab);
function changeDirArab() {
  document.documentElement.style.direction = "rtl";
  arabic.style.display = "none";
  english.style.display = "inline";
}
english.addEventListener("click", changeDirEng);
function changeDirEng() {
  document.documentElement.style.direction = "ltr";
  english.style.display = "none";
  arabic.style.display = "inline";
}
