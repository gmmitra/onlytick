$(document).ready(function() {
  $('.open-nav').on('click', function(e) {
    e.preventDefault();
    var _this = $(this),
        target = _this.data('target');

    $('.sub-menu-mobile-wrap').each(function(i, el) {
      if(target.substr(1) !== $(el).attr('id')) {
        if($(el).is(':visible')) {
          $(el).slideUp(300);
        }
      }
    });
    $(target).slideToggle(300);
  });
});
