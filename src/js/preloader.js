// Preloader
const body = document.querySelector('body');
const preloader = document.querySelector('.preloader');
const animatedElements = document.querySelectorAll('[data-animate]');

window.addEventListener('load', () => {
    preloader.addEventListener('transitionend', function () {
        body.classList.add('body--loaded');
        this.classList.add('preloader--hidden');
        animatedElements.forEach(element => {
            element.classList.add(element.classList[0] + '--hasLoaded');
        });
    });
    preloader.classList.add('preloader--disappear');
});