<?php
require "./Connect.php";
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
if(isset($_POST) && !empty($_POST)){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $sql_insert = "INSERT INTO users (name,email,phone,password) VALUES ('$name','$email','$phone','$password')";
    if(mysqli_query($db,$sql_insert)){
    $sql_select = "SELECT * FROM users where email = $email";
    $result = mysqli_query($db,$sql);
    $row = mysqli_fetch_assoc($result);
    http_response_code(201);
    print json_encode($row);
  }

    else{
       http_response_code(422); 
    }
}


?>