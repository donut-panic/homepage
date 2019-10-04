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

// Contact form
const form = document.querySelector('form');
const email = document.querySelector('[name="email"]');
const emailLabel = document.querySelector('#email-label');
const message = document.querySelector('[name="message"]');
const messageLabel = document.querySelector('#message-label');

form.addEventListener('submit', e => {

    let isEmailValid = false;
    let isMessageValid = false;

    e.preventDefault();

    if (email.value.length > 0) {
        isEmailValid = true;
        emailLabel.classList.remove('form__validation-info--error');
    } else {
        isEmailValid = false;
        emailLabel.classList.add('form__validation-info--error');
    }

    if (message.value.length > 0) {
        isMessageValid = true;
        messageLabel.classList.remove('form__validation-info--error');
    } else {
        isMessageValid = false;
        messageLabel.classList.add('form__validation-info--error');
    }

    if (isEmailValid && isMessageValid) {

        const data = {
            email: email.value,
            message: message.value
        };

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        fetch('/mail.php', options).then(response => {
            if (response.ok) {
                alert('działa');
            } else {
                alert('nie działa');
            }
        });
    }

});