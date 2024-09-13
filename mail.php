<?php
require("src/class.phpmailer.php");
$folder = "/uploads/images/";
$destinationFolder = $_SERVER['DOCUMENT_ROOT'] . $folder;
$file = $destinationFolder.'img.jpg';

$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$email = htmlspecialchars($_POST['email']);

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Host = "ssl://smtp.gmail.com";
$mail->SMTPAuth = true;
$mail->Port = 465;
$mail->Username = 'dimakuryndin49@gmail.com';
$mail->Password = 'crgn gmep ikmo rlpc';

$mail->CharSet = 'UTF-8';
$mail->From="dimakuryndin49@gmail.com";
$mail->FromName="toprealestatedubai";
$mail->Sender="dimakuryndin49@gmail.com";

$mail->AddAddress("dimakuryndin49@gmail.com");
$mail->Subject = "123";

$mail->IsHTML(true);
$mail->AddEmbeddedImage($file, 'logoimg', $file);
$mail->Body = "<h1>123</h1>
               <p><strong>Имя:</strong> $name</p>
               <p><strong>Телефон:</strong>$phone</p>
               <p><strong>E-mail:</strong> $email</p>";
$mail->AltBody = "Новая заявка с сайта\nИмя: $name\Телефон:$phone\E-mail:$email";

if(!$mail->Send())
{
   echo "Error sending!: " . $mail->ErrorInfo;;
}
else
{
   echo "The form has been successfully!";
}
?>
