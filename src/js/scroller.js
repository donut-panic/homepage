export default function () {

    const scrollToTopTriggers = document.querySelectorAll('.scroll-to-top');

    scrollToTopTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

}
