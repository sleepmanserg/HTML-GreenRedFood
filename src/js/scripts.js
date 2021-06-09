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
      theme.validateForms();
      theme.floatingSearchBar();
      theme.autocomplete();
      theme.addToCartBtn();
      // theme.stickyCategoryHeader();

    },
    /** Form validation */
    validateForms: () => {

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      let forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add('was-validated')
          }, false);
        });
    },

    /** Search bar show/hide */
    floatingSearchBar: () => {
      $(document).on('click', '.data-toggle', function () {
        let $target = $($(this).data('target'));
        let classes = $(this).data('classes');
        let backdrop = $(this).data('backdrop');
        let siteBackdrop = $('.site-backdrop');


        $target.toggleClass(classes);

        siteBackdrop.on('click', function (e) {
          closeDisable();
        });

        return false;
      });

      function closeDisable() {
        $('.site-backdrop, .search-hide, .search-form').removeClass('searchbarActive');
      }
    },

    /** Search form autocomplete */
    autocomplete: () => {
      let datasrc = [
        {label: 'Фила с тунцом', value: 'opt1'},
        {label: 'Филадельфия', value: 'opt2'},
      ];
      const ac = new Autocomplete(document.getElementById('searchFormAutoComplete'), {
        data: datasrc
      });
    },

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

    /** Add to cart button text change and class  */
    addToCartBtn: () => {
      let addToCartButton = $('.addToCartBtn');
      addToCartButton.on("click", function() {
        let el = $(this);
        el.toggleClass('active');
        el.text() == el.data("text-swap")
          ? el.text(el.data("text-original"))
          : el.text(el.data("text-swap"));
      });
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
