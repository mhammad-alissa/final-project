<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if(isset($_POST) && !empty($_POST)){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $image = $_POST['image_name'];
    $sql="SELECT * FROM user WHERE email='".$email."' limit 1 ";
    $result = mysqli_query($db,$sql);

      if(mysqli_num_rows($result) == 1){
          $email_error = "The email you entered already exists";
          echo json_encode($email_error);
      }
      else{
             move_uploaded_file($_FILES['image']['tmp_name'],"../pablic/react-project-master/public/userImages/".$_FILES['image']['name']);
             $sql_insert = "INSERT INTO user (name,email,phone,password,image) VALUES ('$name','$email','$phone','$password','$image')";
             if(mysqli_query($db,$sql_insert)){
             $sql_select = "SELECT * FROM user where email = $email";
             $result = mysqli_query($db,$sql);
             $row = mysqli_fetch_assoc($result);
             http_response_code(201);
             print json_encode($row);
           }

             else{
                http_response_code(422); 
             }
  }
}

?> 