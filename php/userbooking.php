<?php
require('connect.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization,Origin, X-Requested-With, Content");
header('Content-Type: application/json; charset=utf-8');
// $json = file_get_contents('php://input');
// $obj = json_decode($json,true);
// $id = $obj['id'];
// $sql = "SELECT * FROM users where id = $id;";
// $result = mysqli_query($db,$sql);
// $row = mysqli_fetch_assoc($result);
//   // output data of each row
//     // print_r($rows);
//     // echo "DATA1: " . $row["coffee_name"]. " - DATA2: " . $row["coffee_name"]. "<br>";
$sql =  "SELECT * ,services_users.id as booking_id, users.name as user_name,services.name as service_name
FROM services_users,users,services 
WHERE services_users.user_id = users.id and services_users.service_id = services.id
;";

$rows = [];
$result = mysqli_query($db,$sql);
while($row = mysqli_fetch_assoc($result)){
  array_push($rows,$row);
}
 print json_encode($rows);