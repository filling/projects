$(document).ready(function() { 
  //assume starting on first floor to begin
  var floors = [1];

  //user clicks/press button
  $("#buttons li a").click(function() {  
		//variables
		var button = $(this);
		
		//add floor number to array
		floors.push( $(this).attr("data-floor") );
		
		//indicate newly selected floor
		$(this).addClass("selected");
    
		//if newly selected floor is higher than current, up direction becomes active
     for( i = 0; i < floors.length; i++ )
     {
      if ( floors[i] < floors[i+1] ) {
        $("#display li.up").addClass("active");
      }
      //else down direction becomes active 
      else if ( floors[i] > floors[i+1] ){
        $("#display li.down").addClass("active");
      }
      else {

      };
     }

		//delay to simulate arriving to floor
		window.setTimeout(function() {
		  //turn of current for all buttons
		  $("#buttons li a").each(function() {
			$(this).removeClass("current");
		  });
		  
		  //then selected floor becomes current instead of selected
		  button.removeClass("selected").addClass("current");

		  //"arrive" at floor by turning off direction arrow. 
		  $("#display li").each(function() {
			$(this).removeClass("active");
		  });

		  //panel display new floor number
		  $("h1").html(floors[1]);
		  
		  //floor becomes current
		  $("#floors div").each(function() {
			$(this).removeClass("current");
			if ( $(this).attr("data-floor") == floors[1] ) {
			  $(this).addClass("current");
			}
		  });      
		}, 1000);
     window.setTimeout(function() {
       floors.shift();
       }, 1000);
		return false;
  });
});
