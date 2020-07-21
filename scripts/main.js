$(document).ready(function () {
  console.log('WORKING!');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      $('#header-logo').attr('src', 'assets/logo-2018.svg');
    } else {
      $('#header-logo').attr('src', 'assets/logo_white.png');
    }
  });
});
