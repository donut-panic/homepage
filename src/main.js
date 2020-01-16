import Scroller from './js/Scroller.js';
import Loader from './js/loader.js';
import ContactForm from './js/contact-form.js';

import './php/mail.php';
import './assets/pdf/jk-resume.pdf';
import './scss/main.scss';
import 'aos/dist/aos.css';

Loader();
const scroller = new Scroller();
ContactForm();