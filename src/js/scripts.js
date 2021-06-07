//
// Custom Scripts
// --------------------------------------------------

;(function ($) {
  'use strict';

  const theme = {
    init: () => {
      // theme.toggler();
      $('.slick-carousel').slick();
      theme.scrollToTab();
      theme.productActive();
      theme.inputPlusMinus();
      // theme.stickyCategoryHeader();

    },

    // stickyCategoryHeader: () => {
    //   let categoryHeader = $('.category-header');
    //   if (categoryHeader.length) {
    //     $(window).on('scroll', function() {
    //       if($(this).scrollTop() > 300) {
    //         categoryHeader.addClass('header-stuck');
    //         $('body').addClass('header-stucked');
    //       } else {
    //         categoryHeader.removeClass('header-stuck');
    //         $('body').removeClass('header-stucked');
    //       }
    //     });
    //   }
    // },

    /** Scroll to active tab */
    scrollToTab: () => {
      $('.category-btn__wrapper').on('shown.bs.tab', function(e) {
        let dataTab = $(this).data('bs-target');
        $('html, body').animate({
          scrollTop: $(dataTab).offset().top
        }, '150');
      });
    },
    /** Add class for product card */
    productActive: () => {
      let categoryProductCard = $('.product__card');
      categoryProductCard.hover(function() {
        $(this).toggleClass('active');
      });
    },

    /** Input +/- increment */
    inputPlusMinus: () => {
      $('.minus').on('click', function () {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });

      $('.plus').on('click', function () {
        let $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
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

})(jQuery);