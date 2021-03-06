var app = function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var init = function init() {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav_list-item');
    applyListeners();
  }
  var applyListeners = function applyListners() {
    menu.addEventListener('click', function {
      return toggleClass(body, 'nav-active');
    });
  };
  var toggleClass = function toggleClass(element, stringClass){
    if(element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
  };
  init();
}();