$(document).ready(function(){

  $(window).scroll(function(){
      if($(this).scrollTop() > 100){
          $('#backtop').fadeIn();
      }else{
          $('#backtop').fadeOut();
      }
  });
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
      $(window).scroll(function() {
        $('#maboologo').css('opacity', 0);
        $("#maboologo").each(function(){
          var pos = $(this).offset().top;

          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("bounceIn");
          }
        });
        $('#firstly').css('opacity', 0);
        $("#firstly").each(function(){
          var pos = $(this).offset().top;

          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("fadeInLeft");
          }
        });
        $('#secondly').css('opacity', 0);
        $("#secondly").each(function(){
          var pos = $(this).offset().top;

          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("fadeInRight");
          }
        });
        $('.thirdly').css('opacity', 0);
        $(".thirdly").each(function(){
          var pos = $(this).offset().top;

          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("fadeInUp");
          }
        });
      });
});
