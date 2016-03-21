$(document).ready(function(){


  function xlax() {
    var xpos = $(window).scrollLeft();
    // $("#scarlett").css("left", (xpos/2) + "px);"
    $(".bg").css("left", -(xpos/2) + "px");
  };

  $(window).scroll(function(e){
    xlax();
  });

});

