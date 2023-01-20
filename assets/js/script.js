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

// delivery-slider
// $(document).ready(function(){
//   $('.delivery-sleder').slick({
//     dots:true,
//     arrows:true,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding:"0",
//   slidesToScroll: 1,
//   appendArrows:".delivery-slider__arrow"
  // responsive: [
  //   {
  //     breakpoint: 1120,
  //     settings: {
  //       arrows: true,
  //       centerMode: true,
  //       centerPadding: '30px',
  //       slidesToShow: 1
  //     }
  //   },
  //     {
  //     breakpoint: 1024,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       centerPadding: '30px',
  //       slidesToShow: 1,
  //       dots:true
  //     }
  //   }
  // ]
//   });
// });