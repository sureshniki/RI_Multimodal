(function($) {
  'use strict';
  $(function() {
    var toggle = $('[data-toggle="offcanvas"]');
    var sidebar = $('.sidebar-offcanvas');
    toggle.attr({ 'aria-label': 'Toggle navigation', 'aria-controls': 'sidebar', 'aria-expanded': 'false' });
    $('[data-toggle="minimize"]').attr('aria-label', 'Toggle compact navigation');
    function closeMenu() {
      sidebar.removeClass('active');
      toggle.attr('aria-expanded', 'false');
    }
    function positionMenu() {
      var navbar = document.querySelector('.navbar');
      if (navbar) {
        document.documentElement.style.setProperty('--app-nav-bottom', Math.max(0, navbar.getBoundingClientRect().bottom) + 'px');
      }
    }
    toggle.on('click', function() {
      positionMenu();
      var open = sidebar.toggleClass('active').hasClass('active');
      toggle.attr('aria-expanded', String(open));
    });
    $(document).on('click', function(event) {
      if (!$(event.target).closest('.sidebar-offcanvas, [data-toggle="offcanvas"]').length) closeMenu();
    }).on('keydown', function(event) {
      if (event.key === 'Escape' && sidebar.hasClass('active')) {
        closeMenu();
        toggle.trigger('focus');
      }
    });
    $(window).on('resize scroll', function() {
      positionMenu();
      if (window.innerWidth >= 992) closeMenu();
    });
  });
})(jQuery);
