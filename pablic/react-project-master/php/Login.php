<?php
require 'connect.php';
header("Access-control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 

 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');

 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

 // Populate User email from JSON $obj array and store into $email.
 $email = $obj['email'];

 // Populate Password from JSON $obj array and store into $password.
 $password = $obj['password'];

 //Applying User Login query with email and password match.
 $Sql_Query = "select * from users where email = '$email' and password = '$password' ";

 // Executing SQL Query.
 $check = mysqli_fetch_array(mysqli_query($db,$Sql_Query));
 
$result = mysqli_query($db,$Sql_Query);
$row = mysqli_fetch_assoc($result);

 if(isset($check)){
     $SuccessLoginMsg = 'Data Matched';

     // Converting the message into JSON format.
     $SuccessLoginJson = json_encode($SuccessLoginMsg);

     // Echo the message.
    //  echo $SuccessLoginJson ;
    print json_encode($row,true);

 } else{

     // If the record inserted successfully then show the message.
     $InvalidMSG = 'Invalid Username or Password' ;

     // Converting the message into JSON format.
     $InvalidMSGJSon = json_encode($InvalidMSG);

     // Echo the message.
     echo $InvalidMSGJSon ;

 }

 mysqli_close($db);
 
?> 