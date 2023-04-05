// $('.navbar_menu-icon-wrapper').on('click', function() {
//     $('.navbar_menu-wrapper').toggleClass('is--open');
//   });

  $(window).scroll(function () {
    $(window).scrollTop() > 100 ? $(".navbar").addClass("on--scroll") : $(".navbar").removeClass("on--scroll");
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
