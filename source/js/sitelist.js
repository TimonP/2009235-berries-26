(() => {
  const links = document.querySelectorAll('.site-list__item a');

  if (!links.length) return;

  links.forEach((link) => {
    if (link.pathname == window.location.pathname) {
      link.parentNode.classList.add('site-list__item--active');
    } else if (window.location.pathname == '/' && link.pathname == '/index.html') {
      link.parentNode.classList.add('site-list__item--active');
    } else if (window.location.pathname == '/2009235-berries-26/' && link.pathname == '/2009235-berries-26/index.html') {
      link.parentNode.classList.add('site-list__item--active');
    }

    if (link.getAttribute('href') == '#') {
      link.parentNode.classList.remove('site-list__item--active');
    }
  })
})();
