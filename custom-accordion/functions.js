$(document).on('click', '.accordion', function() {
  var curr = $(this);
  var prev = $(curr).prevAll();
  var next = $(curr).nextAll();
  var all = $(curr) + $(prev) + $(next);
  
  if ( $(this).hasClass('open') )
  {
    $(this).removeClass('open')
  }
  else
  {
    $(this).addClass('open');
  }
  $(prev).removeClass('open');
  $(next).removeClass('open');
})