<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if(isset($_POST) && !empty($_POST)){
    $username = $_POST['username'];
    $phoneuser = $_POST['phoneuser'];
    $product_id = $_POST['product_id'];
    $product_name = $_POST['product_name'];
    $product_img = $_POST['product_img'];
    $date_chosen = $_POST['date_chosen'];
    $time_of_day = $_POST['time_of_day'];
    $notes = $_POST['notes'];
    // $date = $_POST['date'];
    // $time = $_POST['time'];
    // $num = $_POST['num'];
    // $phone = $_POST['phone'];
    // $email = $_POST['email'];
   
             $sql_insert = "INSERT INTO booking (username,phoneuser,product_id,product_name,product_img,date_chosen,time_of_day,notes) VALUES ('$username','$phoneuser','$product_id','$product_name','$product_img','$date_chosen','$time_of_day','$notes')";
             if(mysqli_query($db,$sql_insert)){
             $result = mysqli_query($db,$sql);
             $row = mysqli_fetch_assoc($result);
             http_response_code(201);
             print json_encode($row);
           }

             else{
                http_response_code(422); 
             }
  
}