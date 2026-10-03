(function () {
  'use strict';

  // 网盘跳转按钮：统一按 data-link 读取 SITE_LINKS
  document.querySelectorAll('[data-link]').forEach(function (el) {
    el.addEventListener('click', function (ev) {
      var key = el.getAttribute('data-link');
      var url = window.SITE_LINKS && window.SITE_LINKS[key];
      if (url) {
        ev.preventDefault();
        window.open(url, '_blank', 'noopener');
      }
    });
  });

  // 移动端折叠导航
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 返回顶部浮动按钮：下滚后出现
  var fabTop = document.querySelector('.fab-top');
  if (fabTop) {
    var onScroll = function () {
      fabTop.classList.toggle('is-visible', window.scrollY > 480);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    fabTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
