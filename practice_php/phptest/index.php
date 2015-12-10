<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<title>连接数据库</title>
</head>
<body>
<table style='text-align:left' border="1px solid #fff">
<tr><th>id</th><th>名字</th><th>年纪</th><th><a href="adduser.html">添加用户</a></th></tr>
<?php
require_once 'fun.php';
$conn = connectDB();
$result = mysql_query("SELECT * FROM users");
$dataCount = mysql_num_rows($result);

for ($i=0; $i <$dataCount ; $i++) { 
    $result_arr = mysql_fetch_assoc($result);
    $id = $result_arr['id'];
    $name = $result_arr['name'];
    $age = $result_arr['age'];
    echo "<tr><td>$id</td><td>$name</td><td>$age</td><td><a href='edituser.php?id=$id'>修改</a> <a href='deluser.php?id=$id'>删除</a></td></tr>";
}

?>
</table>
<form action="upload.php" method="post" enctype="multipart/form-data">
	<label>请上传一张图片</label>
	<br>
	<input type="file" name="file">
	<input type="submit">
</form>
</body>
</html>
