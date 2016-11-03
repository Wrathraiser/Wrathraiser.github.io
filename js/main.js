$(window).bind("orientationchange",function(event){
	if(event.orientation == landscape){
		alert("This website does not support the landscape orientation. Please change to portrait.")
	}
}