<?php
	function connectDB(){
    $conn = mysql_connect('localhost','root','123456');
    if (!$conn) {
		echo "connection failed";
	}
    mysql_selectdb('test',$conn);
    return $conn;
  }
?>
