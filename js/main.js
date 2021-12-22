document.addEventListener('DOMContentLoaded', function () {
  // SWIPER
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  // TABS
  document.querySelectorAll('.btn-tab').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content_active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content_active');
      document.querySelector(`[data-image="${path}"]`).classList.add('tab-content_active');
      document.querySelectorAll('.btn-tab').forEach(function (btnTab) {
        btnTab.classList.remove('btn-tab_active');
      });
      document.querySelector(`[data-path="${path}"]`).classList.add('btn-tab_active');
    });
  });


  // BURGER



  const headerLinkAll = document.querySelectorAll('.header__link');
  if (document.documentElement.clientWidth <= 1100) {
    headerLinkAll.forEach(function (link) {
      link.setAttribute('tabIndex', -1);
    });
  };


  document.querySelector('.btn-burger').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('header__nav_active');
    document.querySelectorAll('.btn-burger__line').forEach(function (line) {
      line.classList.toggle('btn-burger__line_active');
    });
    headerLinkAll.forEach(function (link) {
      if (link.hasAttribute('tabIndex')) {
        link.removeAttribute('tabIndex');
      } else {
        link.setAttribute('tabIndex', -1);
      }
    });
  });



  // ACCORDION


  // SEARCH-FORM
  document.querySelector('.btn-search').addEventListener('click', function () {
    document.querySelector('.search-container').classList.remove('search-container_disabled');
    document.querySelector('.btn-search').classList.add('visibility-hidden');
  });
  document.querySelector('.search-container__btn-exit').addEventListener('click', function () {
    document.querySelector('.search-container').classList.add('search-container_disabled');
    document.querySelector('.btn-search').classList.remove('visibility-hidden');
  });
});
