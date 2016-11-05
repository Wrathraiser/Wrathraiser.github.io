//Smooth scrolling example found from W3 schools
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } // End if
  });
});

//Nav bar opacity example from stackoverflow
$(window).scroll(function() {
    if ($(window).scrollTop() > 75) {
        $('#navigation').css("opacity", 0.6);
    }
    else {
        $('#navigation').css("opacity", 1);
    }
});

$(document).ready(function(){
    $('#navigation').live("mouseover", function () {
            $(this).css("opacity", 1);
            });

    $('#navigation').live("mouseleave", function () {
        if($(window).scrollTop() > 75) { // this here
            $(this).css("opacity", 0.6);
        }
    });

})