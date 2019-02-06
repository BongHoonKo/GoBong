<?php
/*require_once('config.php');
require_once('config_2.php');
$conn = db_init($config['host'],$config['duser'],$config['dpw'],$config['dname']);
$sql = 'select * from `g5_write_test_board`';
$res = array('error' => false);

$action = 'read';

if(isset($_GET['action'])){
    $action = $_GET['action'];
}

if($action == 'read') {
    $result = mysqli_query($conn, $sql);
    $users = array();

    while($row = mysqli_fetch_assoc($result)) {
        array_push($users, $row);
    }

    $res['users'] = $users;
}*/
$conn = new mysqli('localhost','fotrise3','gbh98381','fotrise3');
if($conn -> connect_error) {
    die('Could not connect to database.');
}

$res = array('error' => false);

$action = 'read';

if(isset($_GET['action'])) {
    $action = $_GET['action'];
}

if($action == 'read') {
    $result = $conn -> query('select * from `test` order by `id` DESC');
    $lists = array();

    while($row = $result -> fetch_assoc()) {
        array_push($lists, $row);
    }

    $res['list'] = $lists;

    $conn->close();

    header("Content-type: application/json");
    echo json_encode($res);
    die();
}

if($action == 'create'){

    $title = $_POST['title'];
    $description = $_POST['description'];

    $result = $conn->query("INSERT INTO `test` (`title`, `description`, `created`) VALUES ('$title', '$description', now()) ");

    if($result){
        $res['message'] = "User added successfully";
        echo "<script>location.href = 'http://fotrise3.cafe24.com/list.html'</script>";
    } else{
        $res['error'] = true;
        $res['message'] = "Could not insert user";
        echo "<script>alert('전송에 실패하였습니다.');location.href = 'http://fotrise3.cafe24.com/list.html'</script>";
    }
}

if($action == 'delete'){
    $id = $_POST['id'];


    $result = $conn->query("DELETE FROM `test` WHERE `id` = '$id'");

    if($result){
        $res['message'] = "User deleted successfully";
    } else{
        $res['error'] = true;
        $res['message'] = "Could not delete user";
    }

    $conn->close();

    header("Content-type: application/json");
    echo json_encode($res);
    die();
}
