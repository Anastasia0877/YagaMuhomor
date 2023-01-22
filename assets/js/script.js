$('.menu-icon').on('click', function(){
  $('.menu-icon, .menu').toggleClass("active");
  $('body').toggleClass("overlay");
})

$(document).click(function(e) {
  if (!$(e.target).hasClass("active") &&
      $(e.target).parents(".site-nav").length === 0) {
        $('.menu-icon, .menu').removeClass("active");
        $('body').removeClass("overlay");
  }
});
$('.menu-item').on('click', function(){
  $('.menu-icon, .menu').removeClass("active");
  $('body').removeClass("overlay");
})  

// catalog btns
$('#red-sixty').click(function() {
  $('.catalog-price-red').html('650 грн');
});
$('#red-oh_eighty').click(function() {
  $('.catalog-price-red').html('1000 грн');
});
$('#p-sixty').click(function() {
  $('.catalog-price-pantern').html('675 грн');
});
$('#p-oh_eighty').click(function() {
  $('.catalog-price-pantern').html('1000 грн');
});

// accordion
$(function() {
	
  //BEGIN
  $(".accordion__title").on("click", function(e) {

    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $('.accordion__arrow').removeClass('accordion__rotate');
    }

    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $('.accordion__arrow',this).toggleClass('accordion__rotate');
  });
  //END
  
});

// button-back-to-top
function backToTop() {
  var button = $('.back-to-top');
  $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 200) {
          button.fadeIn();
      } else {
          button.fadeOut();
      }
  });
  button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({
          scrollTop: 0
      }, '100');
  })
}
backToTop();