//
// Custom Scripts
// --------------------------------------------------

;(function ($) {
  'use strict';

  const theme = {
    init: () => {
      // theme.toggler();
      $('.slick-carousel').slick();
			// $('.carousel-prev').click(function(){
			// 	$(this)('.slick-carousel').slick('slickPrev');
			// });
			// $('.carousel-next').click(function(e){
			// 	e.preventDefault();
			// 	$(this)('.slick-slider').slick('slickNext');
			// });
    },

    // toggler: () => {
    //   $(document).on('click', '.data-toggle', function () {
    //     let $target = $($(this).data('target'));
    //     let classes = $(this).data('classes');
    //     let backdrop = $(this).data('backdrop');
    //     let overflow = $(this).data('overflow');
    //     let siteBackdrop = $('.site-backdrop');

    //     $target.toggleClass(classes);

    //     if (backdrop === true) {
    //       siteBackdrop.toggleClass('active');
    //     }
    //     if (overflow === true) {
    //       $('body').toggleClass('overflow-hidden');
    //     }

    //     siteBackdrop.on('click', function () {
    //       closeDisable();
    //     })

    //     return false;
    //   });

    //   function closeDisable() {
    //     $('.site-backdrop, .catalog-sidebar, .sidebar-filters-wrapper').removeClass('active');
    //     $('body').removeClass('overflow-hidden')
    //   }
    // }
  }

  theme.init();

  // // Input +/- increment
  // $('.minus').on('click', function () {
  //   let $input = $(this).parent().find('input');
  //   let count = parseInt($input.val()) - 1;
  //   count = count < 1 ? 1 : count;
  //   $input.val(count);
  //   $input.change();
  //   return false;
  // });

  // $('.plus').on('click', function () {
  //   let $input = $(this).parent().find('input');
  //   $input.val(parseInt($input.val()) + 1);
  //   $input.change();
  //   return false;
  // });

})(jQuery);