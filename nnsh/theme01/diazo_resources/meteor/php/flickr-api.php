<?php

  ///////////////////////////////////////////////////////
  // Uncomment the block below get the working version.
  ///////////////////////////////////////////////////////
  
/*

  // Unset action
  unset($_GET['action']);

  // Forward GET parameters
  $url = "http://www.flickr.com/badge_code_v2.gne?" . http_build_query($_GET);
  
  // Get API Query
  $content = @file_get_contents($url);
  
  // Filter src's
  preg_match_all('/src="(.*?)"/', $content, $matches);
  
  // Get matches or empty array
  $images = (is_array($matches)) ? $matches[1] : array();
  
  // Remove flickr badge beacon
  array_pop($images);
  
  // Filter href's
  preg_match_all('/href="(.*?)"/', $content, $matches);
  
  // Get links or empty array
  $links = (is_array($matches)) ? $matches[1] : array();
  
  // Prepare response object
  $out = array();
  
  foreach ($images as $i => $img) {
    $out[] = array(
      'image' => $img,
      'url' => $links[$i]
    );
  }
  
  // Determine if we have a callback
  $callback = isset($_GET['callback']) ? $_GET['callback'] : null;
  
  // Encode JSON
  $json = json_encode($out);
  
  // Set Content-Type header
  header('Content-Type: application/json;charset=utf-8');
  
  if ($callback) {
    // Return Padded JSON
    printf('%s(%s)', $callback, $json);
  } else {
    // Return Raw JSON
    echo $json;
  }
  
  exit();
  
*/
  
  ////////////////////////////////////////////////////////////////////
  // You can safely remove the lines below to enable the Flickr API
  ////////////////////////////////////////////////////////////////////

  // Sample JSON data structure provided by the Flickr API
  header('Content-Type: application/json;charset=utf-8');
  exit(@file_get_contents('../data/flickr-sample-data.json'));

?>