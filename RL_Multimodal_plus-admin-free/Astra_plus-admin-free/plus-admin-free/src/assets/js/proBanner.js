(function ($) {
  'use strict';
  $(function () {
    var banner = document.getElementById('proBanner');
    if (!banner) return;
    function updateOffset() {
      document.documentElement.style.setProperty('--promotion-height', banner.getBoundingClientRect().height + 'px');
    }
    var dismissed = $.cookie && $.cookie('plus-pro-banner') === 'true';
    banner.classList.toggle('d-none', Boolean(dismissed));
    banner.classList.toggle('d-flex', !dismissed);
    updateOffset();
    if (window.ResizeObserver) new ResizeObserver(updateOffset).observe(banner);
    window.addEventListener('resize', updateOffset);
    document.getElementById('bannerClose').addEventListener('click', function () {
      banner.classList.add('d-none');
      banner.classList.remove('d-flex');
      updateOffset();
      if ($.cookie) $.cookie('plus-pro-banner', 'true', { expires: 1 });
    });
  });
})(jQuery);
