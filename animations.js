$(document).ready(function(){
  $(window).on("scroll", function() {
    $("nav").toggleClass("shrink", $(this).scrollTop() > 50);
    $("a.brand").toggleClass("shrinkBrand", $(this).scrollTop() > 50);
  });
});

$(document).on('click', 'li a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});
