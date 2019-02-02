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

let menus = [learncon, buy, own, connect, products]

 function showMenu(menu) {
   // dropDown(menu);
   for (i = 0; i < menus.length; i++) {
     // console.log("i", menus[i]);
     menus[i].style.opacity = '0';
     menus[i].style.display = 'none';
   }
   menu = document.getElementById(menu);
   menu.style.opacity = 1;
   menu.style.display = 'flex';
 }

function searchMenu() {
  // search.style.display = "flex";
    // console.log("i", menus[i]);
    search.style.height = 0;
    search.style.opacity = 0;

  search.style.display = "flex";
  // console.log("search")
  search.style.height = "200px";
  search.style.width = "100%";
  search.style.opacity = 1;
  search.style.backgroundColor  = "#01FB01";
}

function searchClose() {
  // console.log("close");
  search.style.height = 0;
  console.log(search.style.height)
  if (search.style.height === '0px') {
    setTimeout(function(){
      console.log("noe search")
      search.style.display = 'none'
    }, 500)
  }
}

function dropDown(menu) {
  if (menu !== 'search-con') {
    dropdown.style.height = "400px";
  }

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
  search.style.height = 0;
}

window.addEventListener('scroll', function(evt) {
    let pos = window.scrollY
    if (pos !== 0) {
    hide.style.display = "none";
    header.style.height = "75px";
    home.style.width = "75px";
    search.style.top = "75px";
    dropdown.style.top = "13px";
  } else {
      hide.style.display = "flex";
      home.style.width = "125px";
      header.style.height = "125px";
      search.style.top = "125px";
      dropdown.style.top = "60px";
  }

})


// << ========================== carousel ==================================== >>

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
