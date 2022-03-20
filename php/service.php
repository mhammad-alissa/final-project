<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization,Origin, X-Requested-With, Content");
header('Content-Type: application/json; charset=utf-8'); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
require("connect.php");

$sql = "select * from products"; 
$rows = [];
$result = mysqli_query($db,$sql);
while($row = mysqli_fetch_assoc($result)){
  array_push($rows,$row);
}
 print json_encode($rows);

 
$db->close();
?>