export default function () {

    const formWrapper = document.querySelector('.contact-form');
    const form = document.querySelector('.contact-form__form');
    const goodbyeText = document.createElement('span');
    const email = document.querySelector('[name="email"]');
    const emailLabel = document.querySelector('#email-label');
    const message = document.querySelector('[name="message"]');
    const messageLabel = document.querySelector('#message-label');

    form.addEventListener('submit', function (e) {

        e.preventDefault();

        // let isEmailValid = false;
        // let isMessageValid = false;

        if (email.value.length > 0) {
            isEmailValid = true;
            emailLabel.classList.remove('contact-form__validation-info--error');
        } else {
            isEmailValid = false;
            emailLabel.classList.add('contact-form__validation-info--error');
        }

        if (message.value.length > 0) {
            isMessageValid = true;
            messageLabel.classList.remove('contact-form__validation-info--error');
        } else {
            isMessageValid = false;
            messageLabel.classList.add('contact-form__validation-info--error');
        }

        if (isEmailValid && isMessageValid) {
            const formData = new FormData(this);
            fetch('php/mail.php', {
                method: 'post',
                body: formData
            }).then(function (response) {
                if (!response.ok) {
                    throw Error("Something went wrong :( Try normal email please.");
                }
                return response.text();
            }).then(function (text) {
                form.style.opacity = '0';
                setTimeout(function () {
                    form.style.display = 'none';
                    goodbyeText.textContent = 'Thanks for using the form!';
                    goodbyeText.classList.add('contact-form__goodbye-text');
                    formWrapper.appendChild(goodbyeText);
                }, 1000);
                alert(text);
            }).catch(function (error) {
                alert(error);
            });
        }

    });

}