let header = document.getElementById('header');
let dropdown = document.getElementById("header-drpdwn");
let nav = document.getElementById("nav");
let ecommerce = document.getElementById("ecomm-con");
let home = document.getElementById('home');
let dropitem = document.querySelectorAll("div.dropitem");

// home.addEventListener("mouseover", dropDown);
// home.addEventListener("mouseout", upfunction);
header.addEventListener("mouseover", dropDown);
header.addEventListener("mouseout", upfunction);

function dropDown() {
  console.log(home)
  console.log(dropitem)
  dropdown.style.height = "200px"
  setTimeout(function(){
    dropitem[0].style.visibility = "visible";
    dropitem[1].style.visibility = "visible";
    dropitem[2].style.visibility = "visible";
  }, 700)
}
function upfunction() {
    dropitem[0].style.visibility = "hidden";
    dropitem[1].style.visibility = "hidden";
    dropitem[2].style.visibility = "hidden";
    dropdown.style.height = "0"
}

nav.addEventListener("mouseover", darkOut);
nav.addEventListener("mouseout", lightback);
function darkOut() {
  ecommerce.style.opacity = .5;
}

function lightback() {
  ecommerce.style.opacity = 1;
}
