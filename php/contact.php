<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if(isset($_POST) && !empty($_POST)){
        
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $sql = "INSERT INTO contacts (name,email,subject,message) VALUES ('$name','$email','$subject','$message')";
    if(mysqli_query($db,$sql)){
    
      http_response_code(200);

    }

    else{
      echo "Error";
         http_response_code(422); 
    }
}