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
$conn = new mysqli('localhost', 'fotrise3', 'thought12', 'fotrise3');
if ($conn->connect_error) {
    die('Could not connect to database.');
}

$res = array('error' => false);

$action = 'read';

if (isset($_GET['action'])) {
    $action = $_GET['action'];
}

if ($action == 'read') {
    $result = $conn->query('select * from `test` order by `id` DESC');
    $lists = array();
    $comments = array();
    while ($row = $result->fetch_assoc()) {
        array_push($lists, $row);

        $result1 = $conn->query("select * from `comment` where `test_id`=" . $row['id'] . " order by `id` DESC");
        while ($row1 = $result1->fetch_assoc()) {
            array_push($comments, $row1);
        }
    }

    $res['list'] = $lists;
    $res['comment'] = $comments;


    $conn->close();

    header("Content-type: application/json");
    echo json_encode($res);
    die();
}

if ($action == 'readMyList') {
    $myNickname = $_GET['myNickname'];
    $result = $conn->query("select * from `test` where `user`='".$myNickname."' order by `id` DESC");
    $lists = array();
    $comments = array();
    while ($row = $result->fetch_assoc()) {
        array_push($lists, $row);

        $result1 = $conn->query("select * from `comment` where `test_id`=" . $row['id'] . " order by `id` DESC");
        while ($row1 = $result1->fetch_assoc()) {
            array_push($comments, $row1);
        }
    }

    $res['list'] = $lists;
    $res['comment'] = $comments;


    $conn->close();

    header("Content-type: application/json");
    echo json_encode($res);
    die();
}

/*if($action == 'create'){

    $title = $_POST['title'];
    $description = $_POST['description'];
    $password = $_POST['password'];
    $name = $_GET['name'];

    if($title == "" || $description == "" || $password == "") {
        echo "<script>alert('입력되지 않은 칸이 있습니다.');location.href = 'http://fotrise3.cafe24.com/list.html'</script>";
    }
    else {
        $result = $conn->query("INSERT INTO `test` (`title`, `description`, `created`, `password`,`user`) VALUES ('$title', '$description', now(), '$password', '$name') ");

        if($result){
            $res['message'] = "User added successfully";
            echo "<script>location.href = 'http://fotrise3.cafe24.com/list.html'</script>";
        } else{
            $res['error'] = true;
            $res['message'] = "Could not insert user";
            echo "<script>alert('전송에 실패하였습니다.');location.href = 'http://fotrise3.cafe24.com/list.html'</script>";
        }
    }
}*/

/*NEW CREATE*/
if ($action == 'create') {

    $title = $_POST['title'];
    $description = $_POST['description'];
    $name = $_GET['name'];

    if ($title != "" && $description != "") {
        $result = $conn->query("INSERT INTO `test` (`title`, `description`, `created`,`user`) VALUES ('$title', '$description', now(), '$name') ");

        if ($result) {
            $res['message'] = "User added successfully";
        } else {
            $res['error'] = true;
            $res['message'] = "Could not insert user";
        }
    }

}

if ($action == 'comment') {

    $text = $_POST['text'];
    $name = $_GET['name'];
    $test_id = $_GET['test_id'];

    $result = $conn->query("INSERT INTO `comment` (`text`, `created` ,`user`, `test_id`) VALUES ('$text', now(), '$name', '$test_id') ");

    if ($result) {
        $res['message'] = "User added successfully";
    } else {
        $res['error'] = true;
        $res['message'] = "Could not insert user";
    }
}

if ($action == 'delete') {
    $id = $_POST['id'];
    $user = $_POST['user'];
    $nick = $_GET['nick'];

    if ($user == $nick) {
        $result = $conn->query("DELETE FROM `test` WHERE `id` = '$id'");

        if ($result) {
            $res['message'] = "User deleted successfully";
            $result = $conn->query("DELETE FROM `comment` WHERE `test_id` = '$id'");
        } else {
            $res['error'] = true;
            $res['message'] = "Could not delete user";
        }

        $conn->close();

        header("Content-type: application/json");
        echo json_encode($res);
        die();
    }
}

if ($action == 'signup') {
    $id = $_POST['signId'];
    $nickname = $_POST['signNickname'];
    $pw = $_POST['signPw'];

    if ($id != "" && $nickname != "" && $pw != "") {
        $result = $conn->query("select * from `user` where `name`='".$id."'");
        $result2 = $conn->query("select * from `user` where `nickname`='".$nickname."'");
        $row = $result->fetch_assoc();
        $row2 = $result2->fetch_assoc();
        if ($row !== null) {
            echo "<script>alert('중복된 ID가 있습니다.'); history.back();</script>";
        }
        elseif ($row2 !== null) {
            echo "<script>alert('중복된 Nickname이 있습니다.'); history.back();</script>";
        }
        else {
            $result1 = $conn->query("INSERT INTO `user` (`name`, `password` ,`nickname`) VALUES ('".$id."','".$pw."','".$nickname."') ");
            if ($result1) {
                echo "<script>/*alert('간단 회원가입이 완료되었습니다.');*/history.back();</script>";
            }
        }
    } else {
        echo "<script>alert('빈 칸이 있습니다.'); history.back();</script>";
    }
}

if($action == 'login') {
    session_start();
    $id = $_POST['id'];
    $pw = $_POST['pw'];
    $sql= "select*from `user` where name='".$id."'";
    $result = mysqli_query($conn,$sql);

    if($result ->num_rows==0){
        $_SESSION['is_logged']="NOT";
        $session = array($_SESSION['is_logged'],"","","");
        $res['session'] = $session;
        $conn->close();

        header("Content-type: application/json");
        echo json_encode($res);
        die();
        exit();
    }

    else{
        $row = mysqli_fetch_assoc($result);
        if($pw == $row['password']){
            $nickname = $row['nickname'];
            $_SESSION['is_logged']="YES";
            $_SESSION['id']=$id;
            $_SESSION['nickname']=$nickname;
            $_SESSION['password'] = $pw;
            $session = array($_SESSION['is_logged'],$_SESSION['id'], $_SESSION['nickname'],$_SESSION['password']);
            $res['session'] = $session;
            $conn->close();

            header("Content-type: application/json");
            echo json_encode($res);
            die();
            exit();
        }
        else{
            $_SESSION['is_logged']="NO";
            $_SESSION['id']="";
            $session = array($_SESSION['is_logged'],"","","");
            exit();
        }
    }
}
