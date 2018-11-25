let header = document.getElementById('header');
let dropdown = document.getElementById("header-drpdwn");
let nav = document.getElementById("primary-nav");
let ecommerce = document.getElementById("ecomm-con");
let home = document.getElementById('home');
let learn = document.getElementById("learn");
let learncon = document.getElementById("learn-con");
let buy = document.getElementById("buy-con");
let own = document.getElementById("own-con");
let connect = document.getElementById('connect-con');
let products = document.getElementById('products-con');
let search = document.getElementById('search-con');
// let dropcon = document.getElementById("drop-con");

let menus = [learncon, buy, own, connect, products, search]

nav.addEventListener("mouseover", dropDown);
nav.addEventListener("mouseout", upfunction);
dropdown.addEventListener("mouseout", upfunction);

 function showMenu(menu) {
   // dropDown()
   for (i = 0; i < menus.length; i++) {
     console.log("i", menus[i])
     menus[i].style.opacity = '0';
     menus[i].style.display = 'none';
   }
   menu = document.getElementById(menu);
   console.log("showMenu", menu)
   menu.style.opacity = 1;
   menu.style.display = 'flex';
 }

 function dropDown() {
 dropdown.style.height = "400px";
 }
 function upfunction() {
     dropdown.style.height = "0";
 }

 function hideMenu(menu){
   menu = document.getElementById(menu);
  console.log("hideMenu", menu)
   menu.style.opacity = 0;
   menu.style.display = 'none';
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
