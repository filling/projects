$(document).ready(function() {
	$('.empty-star').hover(function() {
	  var currStar = $(this);
	  var prevStars = $(currStar).prevAll('.empty-star');
	  
	  $(currStar).add( $(prevStars) ).addClass('blue-star');
	}, function() {
	  $('.empty-star').removeClass('blue-star');
	});

	$('.empty-star').click(function() {
	  var currStar = $(this);
	  var prevStars = $(currStar).prevAll('.empty-star');
	  
	  $(currStar).add( $(prevStars) ).addClass('gold-star');
	});
})