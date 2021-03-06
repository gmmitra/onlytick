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

  $('.change-result-view').on('click', function() {
    var _this = $(this),
        type = _this.data('type');

    $('.change-result-view').removeClass('active');
    _this.addClass('active');

    if(type === 'grid') {
      $('.search-item').addClass('grid');
    } else {
      $('.search-item').removeClass('grid');
    }
  })

  $('.box > header').on('click', function() {
    var _this = $(this);
    _this.parent().toggleClass('minimize');
  });

  $('.close-box').on('click', function() {
    var _this = $(this);
    _this.parents('.box').remove();
  });

  $(window).on('resize', function() {
    if (window.matchMedia('(min-width: 768px)').matches) {
      /* the viewport is at least 768px pixels wide */
    } else {
      /* the viewport is less than 768px pixels wide */
      $('.change-result-view[data-type="list"]').trigger('click');
    }
  })

  if (window.matchMedia('(min-width: 768px)').matches) {
    /* the viewport is at least 768px pixels wide */
  } else {
    /* the viewport is less than 768px pixels wide */
    $('.change-result-view[data-type="list"]').trigger('click');
  }

  $('.messages').on('click', function() {
  $('.chat').show();
  });


});
