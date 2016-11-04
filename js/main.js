$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


$(document).ready(function(){
	(function(){
		var fadeSpeed = 200, fadeTo = 0.5, topDistance = 30;
		var topbarME = function() { $('#navigation').fadeTo(fadeSpeed, 1);} topbarML = function() {$('#navigation').fadeTo(fadeSpeed, fadeTo);};
		var inside = false;
		
		$(window).scroll(function(){
			position = $(window).scrollTop();
			if(position > topDistance && !inside){
				topbarML();
				$('#navigation').bind('mouseenter', topbarME);
				$('#navigation').bind('mouseleave',topbarML);
				inside=true;
			}
			else if(position < topDistance){
				topbarME();
				$('#navigation').unbind('mouseenter', topbarME);
				$('#navigation').unbind('mouseleave', topbarML);
				inside=false;
			}
		});
	})();
});