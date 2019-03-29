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
$conn = new mysqli('localhost','fotrise3','thought12','fotrise3');
if($conn -> connect_error) {
    die('Could not connect to database.');
}

$res = array('error' => false);

$action = 'read';

if(isset($_GET['action'])) {
    $action = $_GET['action'];
}

if($action == 'read') {
    $result = $conn -> query('select bf_file,wr_id from `g5_board_file` where bo_table="test_board" && bf_no = 0 order by `wr_id` DESC');
    $users = array();

    while($row = $result -> fetch_assoc()) {
        array_push($users, $row);
    }

    $res['g5'] = $users;

    $conn->close();

    header("Content-type: application/json");
    echo json_encode($res);
    die();
}

if($action == 'subject') {
    $result1 = $conn -> query('select wr_subject from `g5_write_test_board` order by `wr_id` DESC');
    $users1 = array();

    while($row1 = $result1 -> fetch_assoc()) {
        array_push($users1, $row1);
    }
    $res1['g51'] = $users1;

    $conn->close();

    header("Content-type: application/json");
    echo json_encode($res1);
    die();
}