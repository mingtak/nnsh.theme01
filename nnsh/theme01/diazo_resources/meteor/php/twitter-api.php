<?php

/* 
    
  Twitter API Authentication Credentials

  Twitter API Version 1.1 (https://dev.twitter.com/docs/api/1.1/overview) requires all users
  to provide authentication credentials when requesting information from their API endpoint.

  To get your API Authentication Credentials, do the following:

  1. Sign into your Twitter Account
  2. Go to http://dev.twitter.com/apps
  3. Click on the “Create a new Application” button
  4. Enter the name of your website in the “Name” field. If the name is already taken,
     use a name that is not taken.
  5. Enter something in the “Description” field.
  6. Enter your website’s URL in the “Website” field. This is very important, since the API
     will only work if the requests are made from that URL. (example: http://yoursite.com)
  7. Agree to the “Developer Rules Of The Road” by checking the box that says “Yes, I agree”.
  8. Enter the right text in the Captcha verification field.
  9. Click on the “Create your Twitter Application” button.
  10. Once in the application page, click on the “Create my access token” button. This will
      complete the credentials generation.

  You can use the `twitteroauth` library to interact to the API:
  https://github.com/abraham/twitteroauth

  The following page explains how to setup your twitter feed with OAuth:
  https://dev.twitter.com/docs/auth/oauth/single-user-with-examples

  For more information about the Twitter 1.1 API:
  https://dev.twitter.com/docs/api/1.1/overview
  https://dev.twitter.com/docs/api/1.1

*/

  ////////////////////////////////////////////////////////
  // Uncomment the block below get the working version.
  // Make sure you specify the credentials properly.
  ////////////////////////////////////////////////////////

/*
  
  if (!class_exists('TwitterOauth')) require('twitteroauth/twitteroauth.php');

  define('CONSUMER_KEY', '');
  define('CONSUMER_SECRET', '');
  define('ACCESS_TOKEN', '');
  define('ACCESS_TOKEN_SECRET', '');
  
  $connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);
  
  $result = $connection->get("statuses/user_timeline", array(
    'screen_name' => "smashingmag",
    'count' => 3
  ));
  
  exit(json_encode($result));

*/
  
  /////////////////////////////////////////////////////////////////////////////
  // You can safely remove the lines below if you're using the code above.
  /////////////////////////////////////////////////////////////////////////////
  
  // Sample JSON data structure provided by the Twiter API
  header('Content-Type: application/json;charset=utf-8');
  exit(@file_get_contents('../data/twitter-sample-data.json'));

?>