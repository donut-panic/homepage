<?php
if ($_POST) {
    $to = "yaroslawek@gmail.com";
    $subject = 'Wiadomość ze strony KARCZEWSKI.DEV';
    $data = json_decode(file_get_contents('php://input'), true);
    $message = 'Name: '.$data['email'].' Message: '.$data['message'];
    $success = mail($to, $subject, $message);
    if ($success) {
        echo "Success!";
    }
    else {
        echo "Fail";
    }
}
?>