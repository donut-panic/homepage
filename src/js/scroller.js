export default class Scroller {

    constructor() {
        this.scrollTriggers = document.querySelectorAll('[data-scroll-to]');
        this.addEvents();
    }

    addEvents() {
        this.scrollTriggers.forEach(function (trigger) {
            trigger.addEventListener('click', function (event) {
                event.preventDefault();
                const scrollTo = document.getElementById(trigger.dataset.scrollTo);
                const yPosition = scrollTo.offsetTop;
                window.scroll({
                    top: yPosition,
                    behavior: 'smooth'
                });
            });
        });
    }

}