<?php
require('connect.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization,Origin, X-Requested-With, Content");
header('Content-Type: application/json; charset=utf-8');
if(isset($_POST) && !empty($_POST)){
    move_uploaded_file($_FILES['test']['tmp_name'],"../travelix/public/userImages/".$_FILES['test']['name']);
    // $request = json_decode($postdata);
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $id=$_POST['id'];
    // $image=$request->image;
    $phone = $_POST['phone'];

      $image_name = $_POST['image'];

    // print_r($_FILES["image"]);

    // move_uploaded_file($_FILES['test']['tmp_name'],"/img".$_FILES['test']['name']);
    $sql_edit = "UPDATE userr
            SET name = '$name', email= '$email',password='$password', phone='$phone',image='$image_name'
            WHERE id = '$id';";
    if(mysqli_query($db,$sql_edit)){
        http_response_code(201);
        print json_encode($_POST);
    }
    else{
         http_response_code(422); 
    }
}
?>
