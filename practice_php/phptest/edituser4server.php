<?php
require_once 'fun.php';
$conn = connectDB();

$name = $_POST['name'];
$id = $_POST['id'];
$age = intval($_POST['age']);

mysql_query("UPDATE users SET name='$name',age=$age WHERE id=$id");

header('location:index.php');

?>