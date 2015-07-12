<?php 
/**
 * @package Norma HTML
 */

$response = array('error'=>'');


if (isset($_POST['user_name'])) {
	$name  = $_POST['user_name'];
	$email = $_POST['user_email'];
	$msg   = $_POST['user_msg'];
	
	$mailAddress = 'yourmail@mail.com';
	$subject = 'Subject';
	$msg = "Name: $name\r\nE-mail: $email\r\nMessage: $msg";
	$headers = "MIME-Version: 1.0\r\n Content-type: text/plain; charset=utf-8\r\n From: $email\r\n Reply-To: $email\r\n X-Mailer: PHP/" . phpversion();
	
	if (!mail($mailAddress, $subject, $msg, $headers)) {
		$response['error'] = 'Mail send error!';
	}
} else {
	$response['error'] = 'Required fields are not filled!';
	ob_start();
	print_r($_POST);
	$response['error'] .= ob_get_contents();
	ob_end_clean();
}

echo json_encode($response);
die();
?>