$(document).ready(function () {
  $('.map__link').click(function (e) {
    $(this).siblings('.header__map_full').is(':visible') ? $(this).siblings('.header__map_full').fadeOut() : $(this).siblings('.header__map_full').fadeIn();
    // $('.header__map_full').fadeIn();
    e.preventDefault();
    
  });
});