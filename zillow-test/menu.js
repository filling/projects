window.onload = function() {
	var nav = document.getElementById("menu");
	nav.addEventListener("mouseover",function(e) {
		var button = e.target;
		if ( button.nodeName == "A" && !button.classList.contains("open") )
		{
			button.parentNode.classList.add("open");
		}
	});
	nav.addEventListener("mouseout",function(e) {
		var button = e.target;
		if (button.nodeName == "A" && button.parentNode.parentNode.id != "menu")
		{
			button.parentNode.classList.remove("open");
		}
	});
}

// document.getElementById("menu").addEventListener("mouseover", function(){
	
// });



//detect hover over button

//if hovered display subnav

//if hovered over subnav keep button active

//if hovered over link in subnav open third tier nav


