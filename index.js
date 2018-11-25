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
let hide = document.getElementById('hide');
// let dropcon = document.getElementById("drop-con");

let menus = [learncon, buy, own, connect, products, search]

// nav.addEventListener("mouseover", dropDown);
// nav.addEventListener("mouseout", upfunction);
// dropdown.addEventListener("mouseout", upfunction);

 function showMenu(menu) {
   dropDown(menu);
   for (i = 0; i < menus.length; i++) {
     // console.log("i", menus[i]);
     menus[i].style.opacity = '0';
     menus[i].style.display = 'none';
   }
   menu = document.getElementById(menu);
   menu.style.opacity = 1;
   menu.style.display = 'flex';
 }

 function dropDown(menu) {
   if (menu !== 'search-con') {
     dropdown.style.height = "400px";
   }
   if (menu === 'search-con') {
     dropdown.style.backgroundColor  = "#01FB01";
     dropdown.style.height = "250px";
   }

   }

function newFunction() {
  for (i = 0; i < menus.length; i++) {
    // console.log("i", menus[i]);
    menus[i].style.opacity = '0';
    menus[i].style.display = 'none';
  }
  dropdown.style.height = "200px"
  dropdown.style.backgroundColor  = "#01FB01";
}

 function upfunction() {
   dropdown.style.height = "0";
   dropdown.style.backgroundColor = "#1a1818";
 }

 function hideMenu(menu){
   menu = document.getElementById(menu);
   menu.style.opacity = 0;
   menu.style.display = 'none';
 }

nav.addEventListener("mouseover", darkOut);
nav.addEventListener("mouseout", lightback);
nav.addEventListener("mouseover", darkOut);
nav.addEventListener("mouseout", lightback);
function darkOut() {
  ecommerce.style.opacity = .5;

}

function lightback() {
  ecommerce.style.opacity = 1;
  // dropcon.style.opacity = 0;
}

window.addEventListener('scroll', function(evt) {
    let pos = window.scrollY
    if (pos !== 0) {
    hide.style.display = "none"
    header.style.height = "75px"
    home.style.width = "75px"
  } else {
      hide.style.display = "flex";
      home.style.width = "125px";
      header.style.height = "125px";
  }

})
