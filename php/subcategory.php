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
// die if SQL statement failed
// if (!$result) {
//   http_response_code(404);
//   die(mysqli_error($db));
// }
 
// if ($method == 'GET') {
//     if (!$id) echo '[';
//       for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
//         echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
//       }
//     if (!$id) echo ']';
// } elseif ($method == 'POST') {
//     echo json_encode($result);
// } else {
//     echo mysqli_affected_rows($db);
// }
 
$db->close();
?>