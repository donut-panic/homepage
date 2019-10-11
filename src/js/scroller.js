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