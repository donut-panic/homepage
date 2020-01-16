export default class Modal {

    constructor() {
        this.modalTriggers = document.querySelectorAll('[data-modal-open]');
        this.closeButtons = document.querySelectorAll('.app__close');
        this.addEvents();
        this.activeModal = null;
    }

    addEvents() {
        // Open modal
        this.modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => this.openModal(trigger, event));
        });
        // Close button
        this.closeButtons.forEach(button => {
            button.addEventListener('click', () => this.closeModal());
        });
    }

    openModal(trigger, event) {
        event.preventDefault();
        this.activeModal = document.getElementById(trigger.dataset.modalOpen);
        this.activeModal.classList.add('app--open');
        document.body.classList.add('body--no-scroll');
    }

    closeModal() {
        if (this.activeModal !== null) {
            this.activeModal.classList.remove('app--open');
            document.body.classList.remove('body--no-scroll');
            this.activeModal = null;
        }
    }

}