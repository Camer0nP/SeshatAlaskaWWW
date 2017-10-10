<?php

session start();
$host = '41.185.93.18';
$port = '5432';
$dbname = 'seshat';
$user = 'seshat';
$password = 'seshat@#123';

ini_set('display_errors', 1);

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password"); //connection string
if ($conn) {
	echo "Connected : " . pg_error();
	$TypeDesc = pg_escape_string($_POST['hazard_type']);
	$lat = pg_escape_string($_POST['latitude1']);
	$long = pg_escape_string($_POST['longitude1']);
	$DateTime = '2017/09/21 10:22';
	if ($TypeDesc = "default"){
	  echo "Please select a valid hazard type";
	  exit;
	} elseif ($TypeDesc = "Ground_Electrical"){
	  $Type_ID = 4
	} elseif ($TypeDesc = "Overhead_Electrical"){
	  $Type_ID = 1
	} elseif ($TypeDesc = "Open_Pit"){
	  $Type_ID = 3
	} elseif ($TypeDesc = "Dump_Site"){
	  $Type_ID = 2
	} else{
	  echo "Error detected";
	  exit;
	} //TypeID is assigned

	
	$query = "INSERT INTO public.Hazard(Type_ID, Admin_ID, User_ID, Verified, Latitude, Longitude, Timestamp, geom) VALUES ('$Type_ID', 1, 1, FALSE, '$lat', '$long', '$DateTime', 'ST_Transform(ST_GeomFromText('POINT($long, $lat)',4326),3587))";
	$result = pg_query($query); //query
} 
if (!$result) {
	$errormessage = pg_last_error();
	echo $errormessage;
	
  exit();
}//query success check
printf("This point was inserted into the database");
pg_close();
exit;

?>
