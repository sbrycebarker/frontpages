let header = document.getElementById('header');
let dropdown = document.getElementById("header-drpdwn");
let nav = document.getElementById("primary-nav");
let ecommerce = document.getElementById("ecomm-con");
let home = document.getElementById('home');
let learn = document.getElementById("learn");
// let dropcon = document.getElementById("drop-con");

console.log(learn)
nav.addEventListener("mouseover", dropDown);
nav.addEventListener("mouseout", upfunction);
dropdown.addEventListener("mouseout", upfunction);
function dropDown() {
  dropdown.style.height = "400px";

 learn.addEventListener("mouseover", showMenu); 

   let mouseOn = learn
   function showMenu(mouseOn) {
     console.log("showMenu")
     console.log(mouseOn)
   }


}
function upfunction() {
    dropdown.style.height = "0";
}

nav.addEventListener("mouseover", darkOut);
nav.addEventListener("mouseout", lightback);
nav.addEventListener("mouseover", darkOut);
nav.addEventListener("mouseout", lightback);
function darkOut() {
  ecommerce.style.opacity = .5;
    // setTimeout(function() {
      // dropcon.style.opacity = 1;
    // }, 500)
}

function lightback() {
  ecommerce.style.opacity = 1;
  // dropcon.style.opacity = 0;
}
