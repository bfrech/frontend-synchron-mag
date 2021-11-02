//Toggler Animation
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    }, false);
  });
}


//PageLoad
let shop = document.getElementById("shop");
let hidden = document.getElementById("hidden");
let versions = document.getElementsByClassName("version")
let about = document.getElementById("about")
let imprint = document.getElementById("imprint")
let stockists = document.getElementById("stockists");

function showShop(){
  shop.style.display = "block";
  stockists.style.display = "none";
  hidden.style.display = "none";
  about.style.display = "none";
  imprint.style.display = "none";
  for (let i=0; i<versions.length; i++){
    versions[i].style.display = "none";
  }
}

function showAbout(){
  shop.style.display = "none";
  stockists.style.display = "none";
  hidden.style.display = "none";
  about.style.display = "block";
  imprint.style.display = "none";
  for (let i=0; i<versions.length; i++){
    versions[i].style.display = "none";
  }
  console.log("Show About")
}

function showImprint(){
  shop.style.display = "none";
  stockists.style.display = "none";
  hidden.style.display = "none";
  about.style.display = "none";
  imprint.style.display = "block";
  for (let i=0; i<versions.length; i++){
    versions[i].style.display = "none";
  }
}
function showStockists(){
  shop.style.display = "none";
  stockists.style.display = "block";
  hidden.style.display = "none";
  about.style.display = "none";
  imprint.style.display = "none";
  for (let i=0; i<versions.length; i++){
    versions[i].style.display = "none";
  }
}

//Single Magazine
function show(index){
  let version = document.getElementById(index.toString());
  shop.style.display = "none";
  hidden.style.display = "block";
  about.style.display = "none";
  imprint.style.display = "none";
  version.style.display = "block";
}



