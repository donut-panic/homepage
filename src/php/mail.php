<?php

    $to = "yaroslawek@gmail.com";
    $subject = 'Wiadomość ze strony KARCZEWSKI.DEV';

    if (isset($_POST['email']) && isset($_POST['message'])) {
        $message = "Wiadomość od " . $_POST['email'] . ": " . $_POST['message'];
        $success = mail($to, $subject, $message);
        if ($success) {
            echo "Thanks for your message! I'll respond as soon as possible.";
        } else {
            echo "Something went wrong :( Try normal e-mail please.";
        }
    }

?>