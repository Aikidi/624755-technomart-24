
function modalWin( modalId, toDo = "none") {
	modalWindow = document.getElementById( modalId) ;
	modalWindow.style.display = toDo ;
	return true ;
}

function chColorInTop( btType , bgCol = "#ee3643") {
	if (btType=="cart-id") {modalWin("add-cart-id","block");}
	bElem = document.getElementById(btType) ;
	bElem.style.backgroundColor = bgCol ;
	return true;
}

function chBanner(step) {
  maxCount = parseInt(document.getElementById("banner_max").value) ;
  curCount = parseInt(document.getElementById("banner_count").value) ;
  newCount = (curCount + parseInt(step)) ;
  if (newCount > maxCount) { newCount = 1 ; } else if (newCount == 0) { newCount = maxCount; }
  bannerHide = "banner-" + curCount ;
  bannerShow = "banner-" + newCount ;
  document.getElementById(bannerShow).classList.remove("visually-hidden") ;
  document.getElementById(bannerHide).classList.add("visually-hidden") ;
  document.getElementById("banner_count").value = newCount ;
}