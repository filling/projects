window.onload = function() {
	document.getElementById("container").addEventListener("click", function(e) {
	  e.target.className += ' blue';  
	})
}