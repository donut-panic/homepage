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