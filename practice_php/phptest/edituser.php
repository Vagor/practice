<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>修改数据</title>
</head>
<body>
<?php
require_once 'fun.php';
$conn = connectDB();

$id = intval($_GET['id']);
$result = mysql_query("SELECT * FROM  users WHERE id=$id");
$arr = mysql_fetch_assoc($result);
?>
<form action="edituser4server.php" method="post">
  <div style="display: none">
    <label>ID：</label>
    <input type="text" name="id" value="<?php echo $arr['id'];?>">
  </div>
  <div>
    <label>名字：</label>
    <input type="text" name="name" value="<?php echo $arr['name'];?>">
  </div>
  <div>
    <label>年纪：</label>
    <input type="number" name="age" value="<?php echo $arr['age'];?>">
  </div>
  <input type="submit" value="提交">
</form>
</body>
</html>