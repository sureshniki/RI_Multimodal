(function ($) {
  'use strict';
  $(function () {
    var banner = document.getElementById('proBanner');
    if (!banner) return;
    var close = document.getElementById('bannerClose');
    var dismissed = $.cookie && $.cookie('majestic-pro-banner') === 'true';
    banner.classList.toggle('d-none', !!dismissed);
    function updateOffset() {
      document.documentElement.style.setProperty('--banner-height', banner.getBoundingClientRect().height + 'px');
    }
    updateOffset();
    if (window.ResizeObserver) new ResizeObserver(updateOffset).observe(banner);
    window.addEventListener('resize', updateOffset);
    if (close) {
      close.setAttribute('aria-label', 'Dismiss promotional banner');
      close.addEventListener('click', function () {
        banner.classList.add('d-none');
        updateOffset();
        if ($.cookie) $.cookie('majestic-pro-banner', 'true', { expires: 1 });
      });
    }
  });
})(jQuery);