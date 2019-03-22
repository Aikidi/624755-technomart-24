
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