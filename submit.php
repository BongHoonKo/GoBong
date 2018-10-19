<?php
header("Content-Type:text/html;charset=utf-8");
$email_to = "fotrise@naver.com";
  $email_subject = "새로운 문의가 도착했습니다.";
  if($_POST['name']=="" || $_POST['contact']=="" || $_POST['msg']=="") {
      ?>
      <script>alert('입력되지 않은 칸이 있습니다. 다시 작성해주세요.');history.back();</script>
      <?php
  }
  else{
  $name = $_POST['name'];
  $contact = $_POST['contact'];
  $msg = $_POST['msg'];
    $email_message = "";
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    };
    $email_message = "";
    $email_message .= "이름: ".$name."\n";
    $email_message .= "연락처: ".$contact."\n";
    $email_message .= "메세지: ".$msg;
    //$headers = 'From: '.$email_from."rn".'Reply-To: '.$email_from."rn" .'X-Mailer: PHP/' . phpversion();
    $headers = '';
  @mail($email_to, $email_subject, $email_message, $headers);
  ?>
  <script>alert('전송이 완료되었습니다.');location.replace('http://fotrise3.cafe24.com/');</script>
<?php
  }

?>
