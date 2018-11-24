let header = document.getElementById('header');
let dropdown = document.getElementById("header-drpdwn");
let nav = document.getElementById("primary-nav");
let ecommerce = document.getElementById("ecomm-con");
let home = document.getElementById('home');
let learn = document.getElementById("learn");
let buy = document.getElementById("search");
let learncon = document.getElementById("learn-con");
// let dropcon = document.getElementById("drop-con");

nav.addEventListener("mouseover", dropDown);
nav.addEventListener("mouseout", upfunction);
dropdown.addEventListener("mouseout", upfunction);


function dropDown() {
dropdown.style.height = "400px";
}
function upfunction() {
    dropdown.style.height = "0";
}


learn.addEventListener("mouseover", showMenu);
buy.addEventListener("mouseover", hideMenu);

 function showMenu(menu) {
   console.log("showMenu", menu)
   learncon.style.opacity = 1;
 }

 function hideMenu(menu){
  console.log("hideMenu", menu)  
  learncon.style.opacity = 0;
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
