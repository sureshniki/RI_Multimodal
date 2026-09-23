(function($) {
  'use strict';
  $(function() {
    if (!$('.sidebar-backdrop').length) {
      $('<div class="sidebar-backdrop"></div>').appendTo('body');
    }

    $('[data-toggle="offcanvas"], [data-bs-toggle="offcanvas"]').on("click", function() {
      $('.sidebar-offcanvas').toggleClass('active');
      $('.sidebar-backdrop').toggleClass('active');
    });

    $(document).on('click', '.sidebar-backdrop', function() {
      $('.sidebar-offcanvas').removeClass('active');
      $('.sidebar-backdrop').removeClass('active');
    });
  });
})(jQuery);