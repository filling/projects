function middleColW() {
	//variables
	var leftColW = document.getElementById("left").clientWidth;
	var rightColW = document.getElementById("right").clientWidth;
	var middleColW = window.innerWidth - leftColW - rightColW;
  
	//assign width to middle column
	document.getElementById("middle").style.width = middleColW + "px";
}

window.addEventListener("resize", middleColW);
