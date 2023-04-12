// $('.navbar_menu-icon-wrapper').on('click', function() {
//     $('.navbar_menu-wrapper').toggleClass('is--open');
//   });


$('.navbar_mobile-menu-wrap').on('click', function() {
    $('.navbar_comp').toggleClass('is--open');
  });

// $(".navbar_menu-link").on ("click", function () {
//   $(".navbar").removeClass("on--scroll");
// });

$('.navbar_menu-link').on('click', function() {
  $(this).closest('.navbar_comp').removeClass('is--open');
});

$(window).scroll(function () {
  $(window).scrollTop() > 100
    ? $(".navbar").addClass("on--scroll")
    : $(".navbar").removeClass("on--scroll");
});

$(window).on('scroll', function () {
  $(".navbar_comp").removeClass("is--open")
});

// $('.faq_item-wrap').on('click', function() {
//     $(this).removeClass('is--clicked'),
//     $(this).toggleClass('is--clicked');
//   });

$(".faq_item-wrap").removeClass("is--clicked");

$(".faq_item-wrap").on("click", function () {
  $(this).toggleClass("is--clicked");
  $(this).siblings(".is--clicked").removeClass("is--clicked");
});
