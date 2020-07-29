$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      $('#header-logo').attr('src', 'assets/logo-2018.svg');
    } else {
      $('#header-logo').attr('src', 'assets/logo_white.png');
    }
  });

  $('#nav-menu').hover(function () {
    console.log('working?');
    $('.header').addClass('solid');
    $('.header').removeClass('transparent');
    $('.menu-wrapper').addClass('solid');
    $('.menu-wrapper').removeClass('transparent');
    $('#header-logo').attr('src', 'assets/logo-2018.svg');
  });

  $('#nav-menu').mouseleave(function () {
    $('.header').addClass('transparent');
    $('.header').removeClass('solid');
    $('.menu-wrapper').removeClass('solid');
    $('.menu-wrapper').addClass('transparent');
    $('#header-logo').attr('src', 'assets/logo_white.png');
  });
});

// breakpoint and up
$(window).resize(function () {
  if ($(window).width() >= 980) {
    // when you hover a toggle show its dropdown menu
    $('.navbar .dropdown-toggle').hover(function () {
      $(this).parent().toggleClass('show');
      $(this).parent().find('.dropdown-menu').toggleClass('show');
    });

    // hide the menu when the mouse leaves the dropdown
    $('.navbar .dropdown-menu').mouseleave(function () {
      $(this).removeClass('show');
    });

    // do something here
  }
});
