<!DOCTYPE html>
<html>
<head>
  <meta charset="uft-8"/>
  <title>GoBong</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="theme-color" content="#6B58A7">
  <!--<link href="/assets/images/common/favi.ico" rel="shortcut icon">
  <meta name="naver-site-verification" content="5a3760839632bf2accaa65c28ee953451801fbbc"/>
  <meta name="description" content="콘서트예매, MD상품을 손쉽게 구매하는 종합몰">
  <meta name="keywords" content="KSTAR, 케이스타, 블록체인, 암호화폐 결제">
  <meta name="author" content="KSTAR">
  <meta property="og:type" content="website">
  <meta property="og:title" content="KSTAR">
  <meta property="og:description" content="KSTAR">
  <meta property="og:url" content="https://www.kstar.tv">
  <link rel="canonical" href="https://www.kstar.tv">-->
  <link rel="stylesheet" href="resources/style/index.css"/>
  <script type="text/javascript" src="resources/js/vendor/jquery-2.2.4.min.js"></script>
  <script type="text/javascript" src="resources/js/pages/index.js"></script>
</head>
<body>
<section class="details__wrap">
  <!-- HEADER -->
  <header class="details__hd">
    <a href="index.html">Back To Home</a>
  </header>

  <section class="layout details-content">
    <h1 class="title"></h1>
    <div class="title-line"></div>
    <p class="details__txt"></p>

    <img class="details__img notebook" src="" alt=""/>
    <img class="details__img full mobile" src="" alt=""/>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <p>2018 Bong-Hoon Ko. all rights reserved.</p>
  </footer>
</section>
<?php
echo "<script>var page = '".$_GET['page']."';</script>";
?>
<script>
  $('.details-content .title').html(work_lists[page].conTitle);
  $('.details-content .sub-title').html(work_lists[page].conSubTitle);
  $('.details-content .details__txt').html(work_lists[page].conTxt);
  $('.details__img.notebook').attr('src','resources/images/'+work_lists[page].details.noteBook);
  $('.details__img.mobile').attr('src','resources/images/'+work_lists[page].details.mobile);
</script>
</body>
</html>