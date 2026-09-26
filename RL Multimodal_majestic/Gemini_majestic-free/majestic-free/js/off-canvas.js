(function($) {
  'use strict';
  $(function() {
    $('[data-toggle="offcanvas"], [data-bs-toggle="offcanvas"]').on("click", function() {
      $('.sidebar-offcanvas').toggleClass('active');
      var backdrop = $('.sidebar-backdrop');
      if (backdrop.length === 0) {
        backdrop = $('<div class="sidebar-backdrop"></div>').appendTo('.page-body-wrapper');
      }
      backdrop.toggleClass('active');
    });
    $(document).on('click', '.sidebar-backdrop', function() {
      $('.sidebar-offcanvas').removeClass('active');
      $(this).removeClass('active');
    });
  });
})(jQuery);