window.onload = function() {
	var nav = document.getElementById("menu");
	nav.addEventListener("mouseover",function(e) {
		var button = e.target;
		if ( !button.classList.contains("open") )
		{
			button.classList.add("open");
		}	
	});
	nav.addEventListener("mouseout",function(e) {
		var button = e.target;
		if ( button.classList.contains("open") )
		{
			button.classList.remove("open");
		}	
	});
}