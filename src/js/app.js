import '../scss/app.scss';

// Your JS Code goes here
let hamburger = document.getElementById('hamburger');
let mobile_menu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', function () {
    mobile_menu.classList.toggle('mobile-menu--show');
    hamburger.classList.toggle('hamburger-menu--mobile');
});

let pseudo_tap = document.getElementById('pseudo_tap');
pseudo_tap.addEventListener('click', function () {
    mobile_menu.classList.remove('mobile-menu--show');
    hamburger.classList.remove('hamburger-menu--mobile');
});

