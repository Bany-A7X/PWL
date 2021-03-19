<?php

require_once 'vendor/autoload.php';

$google_client = new Google_Client();

$google_client->setClientId('656457511313-b2be96gl10thkcd5achoim8nk73k2rmq.apps.googleusercontent.com');
$google_client->setClientSecret('fG2RtGzKQnqnHU2ul46Qcy45');

$google_client->setRedirectUri('http://localhost/PWL/M1-Login%20OAuth/index.php');

$google_client->addScope('email');

$google_client->addScope('profile');

session_start();

?>