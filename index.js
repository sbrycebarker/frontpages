let header = document.getElementById('header');
let dropdown = document.getElementById("header-drpdwn");
let nav = document.getElementById("nav");
let ecommerce = document.getElementById("ecomm-con");
let home = document.getElementById('home');
let dropcon = document.getElementById("drop-con");

nav.addEventListener("mouseover", dropDown);
nav.addEventListener("mouseout", upfunction);
home.addEventListener("mouseover", dropDown);
dropdown.addEventListener("mouseout", upfunction);
home.addEventListener("mouseover", dropDown);
home.addEventListener("mouseout", upfunction);
function dropDown() {
  dropdown.style.height = "200px"
}
function upfunction() {
    dropdown.style.height = "0";
}

nav.addEventListener("mouseover", darkOut);
nav.addEventListener("mouseout", lightback);
nav.addEventListener("mouseover", darkOut);
nav.addEventListener("mouseout", lightback);
home.addEventListener("mouseover", darkOut);
home.addEventListener("mouseout", lightback);
function darkOut() {
  ecommerce.style.opacity = .5;
    // setTimeout(function() {
      dropcon.style.opacity = 1;
    // }, 500)
}

function lightback() {
  ecommerce.style.opacity = 1;
  dropcon.style.opacity = 0;
}
