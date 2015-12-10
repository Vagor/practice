<?php
//判断数据
if(!isset($_POST['name'])){
	die('username is not defined');
}
if(!isset($_POST['age'])){
	die('userage is not defined');
}

//接收数据
$name = $_POST['name'];
$age = $_POST['age'];
//保证age为int类型
$age = intval($age);


//连接数据库
require_once 'fun.php';
$conn = connectDB();

//添加数据
mysql_query("INSERT INTO users(name,age) VALUES ('$name',$age)");

//跳转页面
header('location:index.php');
?>