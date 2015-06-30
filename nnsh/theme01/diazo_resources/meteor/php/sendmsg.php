<?php

  /*
  
    Generic PHPMailer Example
  
    The code below contains a basic example demonstrating the usage of the
    PHP Mailer library. Data is sent using AJAX via a POST request.
  
    You can specify the fields you are expecting on the $fields array.
  
    The $data array provides the data coming from the form, which has been
    already escaped for you, for security reasons.
  
    Build your message body using the $body variable.
  
    You can see more PHPMailer examples on the phpmailer/examples directory.
  
    For documentation and more information, refer to:
  
    https://github.com/PHPMailer/PHPMailer
  
   */
  
  ////////////////////////////////////////////////////////
  // Uncomment the block below get the working version.
  // Make sure you specify the required data correctly.
  ///////////////////////////////////////////////////////
  
  /* 

  require_once("phpmailer/class.phpmailer.php'");


  //=================================================================================


  // Provide the fields you are expecting into the $fields array
  
  $fields = array();
  
  // The escaped and sanitized form data will be available via $data
  
  $data = array();
  
  foreach ($fields as $field) {
    $data[$field] = isset($_POST[$field]) ? htmlspecialchars($_POST[$field]) : "";
  }
  
  // Uncomment the line below to inspect the received data
  
  // print_r($data); exit();

  
  //===============================================================================


  $mail = new PHPMailer();

  $body = "";

  $mail->AddReplyTo("name@yourdomain.com", "First Last");

  $mail->SetFrom('name@yourdomain.com', "First Last");

  $mail->AddReplyTo("name@yourdomain.com", "First Last");

  $mail->AddAddress("whoto@otherdomain.com", "John Doe");

  $mail->Subject = "Test Message";

  $mail->MsgHTML($body);

  if(!$mail->Send()) {
    exit(sprintf("ERR: Error: %s", $mail->ErrorInfo));
  } else {
    exit("Your message has been sent!");
  }
  
  */
  
  
  /////////////////////////////////////////////////////////////////////////////
  // You can safely remove the line below if you're using the code above.
  /////////////////////////////////////////////////////////////////////////////
  
  exit("Your message has been sent!");

?>