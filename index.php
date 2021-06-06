<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['HTTP_REFERER'] === 'http://localhost:3000/') {

    $data = getRequestDataBody();

    $emailFrom = isset($data['email']) ? $data['email'] : null;
    $fullname = isset($data['fullname']) ? $data['fullname'] : null;
    $msg = isset($data['msg']) ? $data['msg'] : null;
    $phoneNo = isset($data['phoneNo']) ? $data['phoneNo'] : null;

    if ($emailFrom && $fullname && $msg && $phoneNo) {
        //Load Composer's autoloader
        require 'vendor/autoload.php';

        //Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->CharSet  = 'UTF-8';
            $mail->isSMTP();
            $mail->Host       = 'smtp.ionos.co.uk';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'kamil@s795895695.websitehome.co.uk';
            $mail->Password   = 'Mpyrchla1104!';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            //Recipients
            $mail->setFrom('kamil@s795895695.websitehome.co.uk', 'Marcin Pyrchla');
            $mail->addAddress('kamiltb@hotmail.com');
            $mail->addReplyTo('kamiltb@hotmail.com', 'Marcin Pyrchla');

            //Content
            $mail->isHTML(true);
            $mail->Subject = 'Masz nową wiadomość od ' . $fullname;
            $mail->AltBody = 'Masz nową wiadomość od: ' . $fullname . '. ' . 'Treść wiadomości: ' . $msg . ' Email: ' . $emailFrom . ' Numer kontaktowy: ' . $phoneNo;
            $message = file_get_contents("email_template.html");
            $message = str_replace('%message%', $msg, $message);
            $message = str_replace('%phoneNo%', $phoneNo, $message);
            $message = str_replace('%fullName%', $fullname, $message);
            $message = str_replace('%email%', $emailFrom, $message);
            $mail->AddEmbeddedImage('images/email-template-images/excavator.png', 'excavator', 'excavator.png');
            $mail->AddEmbeddedImage('images/email-template-images/facebook.png', 'facebook', 'facebook.png');
            $mail->msgHTML($message);

            $mail->send();

            echo json_encode(["sent" => true]);
        } catch (Exception $e) {
            echo json_encode(["sent" => false, 'message' => 'Wystąpił błąd podczas próby wysłania wiadomości. Prosimy spróbować ponownie lub o kontakt telefoniczny pod numerem: +48 783 535 487']);
        }
    } else {
        echo json_encode(["sent" => false, 'message' => 'Sprawdź czy wszystkie pola są poprawnie uzupełnione']);
    }
} else {
    echo json_encode(["sent" => false, 'message' => 'Wystąpił błąd podczas próby wysłania wiadomości']);
}

function getRequestDataBody()
{
    $body = file_get_contents('php://input');

    if (empty($body)) {
        return [];
    }

    // Parse json body and notify when error occurs
    $data = json_decode($body, true);
    if (json_last_error()) {
        trigger_error(json_last_error_msg());
        return [];
    }

    return $data;
}
