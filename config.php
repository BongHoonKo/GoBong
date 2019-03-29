<?php
function db_init($host,$duser,$dpw,$dname){
	$conn=mysqli_connect($host,$duser,$dpw);
	mysqli_select_db($conn,$dname);
	if ($conn->connect_error) {
			die('데이터베이스 연결에 문제가 있습니다.\n관리자에게 문의 바랍니다.');
		}
	return $conn;
}
?>
