function modalWin( modalId, toDo) {
	modalWindow = document.getElementById(modalId);
	modalWindow.style.display = toDo;
	return true;
}

function chColorInTop( btType , bgCol) {
	if (btType=="cart-id") {modalWin("add-cart-id", "block");}
	bElem = document.getElementById(btType);
	document.getElementsByName(btType)[0].value = parseInt(document.getElementsByName(btType)[0].value) + 1 ;
	bElem.innerHTML = bElem.innerHTML.split(":")[0] + ":&nbsp;" + document.getElementsByName(btType)[0].value ;
	bElem.style.backgroundColor = bgCol;
	return true;
}

function fnBannerShow(num) {
  var bannerShow = "banner-" + num ;
  document.querySelectorAll(".banners-items").forEach(function(element) { element.classList.add("visually-hidden") ; }) ;
  document.querySelectorAll(".banner-select").forEach(function(element) { element.classList.remove("banner-selected") ; }) ;
  document.getElementById(bannerShow).classList.remove("visually-hidden");
  document.getElementById(num).classList.add("banner-selected");
  document.getElementById("banner_count").value = num;
  return true;
}

function chBanner(step) {
  maxCount = parseInt(document.getElementById("banner_max").value);
  curCount = parseInt(document.getElementById("banner_count").value);
  newCount = (curCount + parseInt(step));
  if (newCount > maxCount) { newCount = 1 ; } else if (newCount == 0) { newCount = maxCount; }
  return fnBannerShow(newCount);
}

function pageValInit(bookmarks_start, cart_start) {
	document.getElementsByName("cart-id")[0].value = cart_start ;
	document.getElementsByName("bookmarks-id")[0].value = bookmarks_start ;
	document.getElementById("cart-id").innerHTML = document.getElementById("cart-id").innerHTML.split(":")[0] + ":&nbsp;" + document.getElementsByName("cart-id")[0].value ;
	document.getElementById("bookmarks-id").innerHTML = document.getElementById("bookmarks-id").innerHTML.split(":")[0] + ":&nbsp;" + document.getElementsByName("bookmarks-id")[0].value ;
	return true;
}

function indexInit(banner_max, activ_count) {
  document.getElementById("banner_max").value = banner_max ;
  document.getElementById("banner_count").value = activ_count ;
  document.querySelectorAll(".banner-select").forEach(function(element) { element.addEventListener("click",  function() { fnBannerShow(element.id); } ); }) ;
  document.querySelector(".banner-button-next").addEventListener("click", function() { chBanner( 1); } );
  document.querySelector(".banner-button-back").addEventListener("click", function() { chBanner(-1); } );
  document.querySelector(".contacts-map").addEventListener("click", function() { modalWin("map-id", "block"); } );
  document.querySelector(".company-info-button").addEventListener("click", function() { modalWin("feedback-id", "block"); } );
  return true;
}

function pageInit() {
  pageValInit(0, 0);
    if ( (window.location.pathname.split("/").pop()).split(".")[0].toLowerCase() == "index") { indexInit(2, 1) ; }
  document.querySelectorAll(".button.buy").forEach(function(element) { element.addEventListener("click", function() { chColorInTop("cart-id", "#ee3643") ;} ); });
  document.querySelectorAll(".button.bookmarks").forEach(function(element) { element.addEventListener("click", function() { chColorInTop("bookmarks-id", "#ee3643") ;} ); });
  document.querySelectorAll(".modal-close").forEach(function(element) {
    var pE = element.parentNode ;
    while (!(!!pE.id)) { pE = pE.parentNode ; }
    element.addEventListener("click",  function() { modalWin(pE.id, "none"); } );
   });
  return true;
}

pageInit();
