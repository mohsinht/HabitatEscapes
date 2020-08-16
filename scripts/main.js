$(document).ready(function () {

  var homeBanner = $('.main-banner');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 750) {
      $('#header-logo').attr('src', 'assets/logo-2018.svg');
    } else {
      $('#header-logo').attr('src', 'assets/logo_white.png');
    }

    if ( homeBanner.length ) {
      var bannerHt = $(homeBanner).height();
      console.log('banner height: ', bannerHt);

      $(this).scrollTop() > bannerHt ?
        $('.property-search-bar').addClass('sticky').removeClass('bar-home')
      :
        $('.property-search-bar').addClass('bar-home').removeClass('sticky');
    }
  

  });

  $('.nav-button').on('click', this, function () {
    $('body').toggleClass('nav-open');
    $('.responsive-menu').toggleClass('d-none');
  });

  $('.button-hd-search').on('click', this, function() {
    $(this).closest('li').addClass('hd-search-active');
    $('.site-header-wrap').addClass('search-on');
    $('.hd-search-form input').focus();
  })

  function removeHdSearch() {
    $('.hd-search-form').closest('li').removeClass('hd-search-active');
    $('.site-header-wrap').removeClass('search-on');
  }
  $(document).mouseup(function(e) {
    var searchBlock = $('.hd-search-block');

    if (!searchBlock.is(e.target) && searchBlock.has(e.target).length === 0) {
      removeHdSearch();
    }
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) removeHdSearch();
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
