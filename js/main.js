$(document).on("pagecreate",function(event){
	$(window).on("orientationchange", function(event){
		if(event.orientation == "landscape"){
			alert("Landscape is not supported by this website, please switch to portrait");
		}
	});
});