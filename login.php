<html>
<?php
if(isset($_POST['submit'])){
    $user= $_POST['username'];
    $ps= $_POST['userpassword'];
    if($user=="achmad" && $ps=="123"){
        echo("Username and Passowrd matched");
    }else{
        echo("Error! please enter correct data!");
    }
}
?>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Login biasa</title>
  <meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
  
 </head>
</html>