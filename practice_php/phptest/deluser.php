<?php
require_once 'fun.php';
$conn = connectDB();

$id = intval($_GET['id']);
mysql_query("DELETE FROM users WHERE id=$id");

header('location:index.php');
?>