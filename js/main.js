// Preloader
const body = document.querySelector('body');
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.addEventListener('transitionend', function() {
        body.classList.add('body--loaded');
        this.classList.add('preloader--hidden');
    });
    preloader.classList.add('preloader--disappear');
});

// Scroll to top
const scrollToTopTriggers = document.querySelectorAll('.scroll-to-top');

scrollToTopTriggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
        e.preventDefault();
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    })
});
