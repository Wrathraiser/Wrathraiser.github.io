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