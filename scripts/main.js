$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 750) {
      $('#header-logo').attr('src', 'assets/logo-2018.svg');
      $('#filter-header').removeClass('d-none');
    } else {
      $('#header-logo').attr('src', 'assets/logo_white.png');
      $('#filter-header').addClass('d-none');
    }
  });

  $('.nav-button').click(function () {
    $('body').toggleClass('nav-open');
    $('.responsive-menu').toggleClass('d-none');
  });

  $('#nav-menu-transparent').hover(function () {
    $('.header').addClass('solid');
    $('.header').removeClass('transparent');
    $('.menu-wrapper').addClass('solid');
    $('.menu-wrapper').removeClass('transparent');
    $('#header-logo').attr('src', 'assets/logo-2018.svg');
  });

  $('#nav-menu-transparent').mouseleave(function () {
    $('.header').addClass('transparent');
    $('.header').removeClass('solid');
    $('.menu-wrapper').removeClass('solid');
    $('.menu-wrapper').addClass('transparent');
    $('#header-logo').attr('src', 'assets/logo_white.png');
  });

  $('.slider').slick();

  if ($('.slider-synced').length) {
    $('.slider-synced').each(function () {
      var sliderFor = $(this).data('for'),
        sliderNav = $(this).data('nav'),
        arrowsMain = $(this).data('arrows-main'),
        arrowsNav = $(this).data('arrows-nav'),
        navCount = $(this).data('nav-count'),
        fade = $(this).data('fade');

      if ($('.slider-thumbs-count').length) {
        var navbar = $(sliderNav)[0],
          list = $(navbar.children);

        $('.slider-thumbs-count .count').text(list.length);
      }

      arrowsMain = arrowsMain ?? false;
      arrowsNav = arrowsNav ?? false;
      navCount = navCount ?? 3;
      fade = fade ?? false;

      $(sliderFor).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: arrowsMain,
        fade: fade,
        asNavFor: sliderNav,
      });
      $(sliderNav).slick({
        slidesToShow: navCount,
        slidesToScroll: 1,
        asNavFor: sliderFor,
        arrows: arrowsNav,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
      });
    });
  }
});
