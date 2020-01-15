import AOS from 'aos';

export default function () {
    const body = document.querySelector('body');
    const preloader = document.querySelector('.preloader');

    window.addEventListener('load', function () {
        preloader.addEventListener('transitionend', function () {
            body.classList.add('body--loaded');
            this.classList.add('preloader--hidden');
            AOS.init({
                duration: 1000,
                easing: 'ease',
                // once: true
            });
        });
        preloader.classList.add('preloader--disappear');
    });

}
