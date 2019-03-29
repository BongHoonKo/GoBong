<?php
$question = $_GET['question'];

if($question == "name?") {
    $res['answer'] = "BongHoon Ko";
}
elseif($question == "age?") {
    $res['answer'] = '28';
}
elseif($question == "girlfriend?") {
    $res['answer'] = '지으니♥';
}
else {
    $res['answer'] = "뀨잉";
}

header("Content-type: application/json");
echo json_encode($res);
die();