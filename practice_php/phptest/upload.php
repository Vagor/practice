<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>上传的文件</title>
</head>
<body>
<?php
$imgdir = "img/";
$file = $_FILES['file'];
$fileName = $file['name'];
$filedir = $imgdir.$fileName;
move_uploaded_file($file['tmp_name'],$filedir);
echo "<img src='$filedir' style='width:100%;'>";
?>
</body>
</html>