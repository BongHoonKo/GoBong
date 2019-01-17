$(function () {

    $(window).on('load resize', function () {
        var win_width = $(window).width();
        var main_height = win_width * 0.75;
        if (win_width <= 992) {
            $('.main-top').height(main_height);
        }
        else {
            $('.main-top').height('100%');
        }
    });

    $('.main-nav li').click(function () {
        var thisTarget = $(this).attr('data-target');
        if (thisTarget == 'home') {
            $('html,body').animate({'scrollTop': '0'}, 300);
        }
        else {
            var targetOffset = $('.' + thisTarget).offset();
            $('html,body').animate({'scrollTop': (targetOffset.top - 82) + 'px'}, 300);
        }
    });

    /*var back = "c";
    $('.my-name').click(function(){
        if(back == "b") {
            $('.back_1').each(function(){
                var back_index = $(this).index();
                $(this).css('background-image','url("resources/images/' + back + '_' + back_index + '.png")');
                $('.main-content, html, body').css('background-color','#02020b');
            });
            back = "c";
        }
        else {
            $('.back_1').each(function(){
                var back_index = $(this).index();
                $(this).css('background-image','url("resources/images/' + back + '_' + back_index + '.png")');
                $('.main-content, html, body').css('background-color','#13051c');
            });
            back = "b";
        }
    });*/

    var conLength = Object.keys(work_lists).length;

    for (props in work_lists) {
        $('.website-work').append(
            '<div class="col-md-4 col-xs-12 work-list">' +
            '<a href="javascript:void(0);" class="work-detail" onclick="pageNum(&#39;' + props + '&#39;)">' +
            /*'  <a href="javascript:void(0);" class="work-detail" onclick="alert(&#39;준비 중 입니다!&#39;)">' +*/
            '     <div class="work-list-dimmer">' +
            '       <p class="dimmer-txt">' +
            '         <span>자세히 보기 ></span>' +
            '       </p>' +
            '     </div>' +
            '     <img src="resources/images/' + work_lists[props].conImg + '" alt="' + work_lists[props].conAlt + '"/>' +
            '     <h5 class="con-title">' + work_lists[props].conTitle + '</h5>' +
            '     <p class="con-txt">' + work_lists[props].conSubTitle + '</p>' +
            '  </a>' +
            '     <p onclick="window.open(&#39;' + work_lists[props].conLink + '&#39,&#39;_blank&#39;);" class="con-link">홈페이지 바로가기 -></p>' +
            '</div>'
        );
            $('.other-project .swiper-wrapper').append(
                '<div class="swiper-slide" data-slide="'+props+'">' +
                '<a href="javascript:void(0);" onclick="pageNum(&#39;' + props + '&#39;)">' +
                '<img src="resources/images/'+ work_lists[props].conImg +'" alt="'+ work_lists[props].conAlt +'"/>' +
                '<p>'+ work_lists[props].conTitle +'</p>' +
                '</a>' +
                '</div>'
            );
    }

});


var work_lists = {
    "Kstar3_0": {
        "conTitle": "KSTAR <span class='inherit__txt'>3.0</span>",
        "conSubTitle": "KSTARGROUP의 공연 티켓팅 플랫폼 : KSTAR 3.0 버전의 퍼블리싱을 전담 하였습니다.",
        "conTxt": "KSTARGROUP의 공연 티켓팅 플랫폼 Kstar.tv의 3.0버전 퍼블리싱을 전담하였습니다.<br/>처음으로 PC / Mobile 분리형 웹으로 작업하였고, KSTAR 2.0을 보완하고 웹접근성을 고려하여 제작하였습니다.<br/>" +
        "<br/>참여율 : 100%<br/> <a class='con-txt__link' href='#' target='_blank'>KSTAR 3.0 바로가기</a>",
        "conImg": "kstar2.51.jpg",
        "conAlt": "kstar2.5 thumbnail",
        "details": {
            "noteBook": "kstar2.5_nb.png",
            "mobile": "kstar2.5Mobile.jpg",
            "font": "font_noto_sans.png"
        },
        "conLink": "#"
    },
    "Condeal": {
        "conTitle": "Contenst Deal Intro",
        "conSubTitle": "블록체인 기술을 이용한 컨텐츠 거래소 플랫폼 : Contents Deal의 소개 페이지 퍼블리싱에 참여하였습니다.",
        "conTxt": "블록체인 기술을 이용한 컨텐츠 거래소 플랫폼인 Contents Deal의 소개 페이지에 일부 참여하였습니다.<br/>반응형 웹으로 제작되었고, 처음으로 VUE.js 개발환경에서 퍼블리싱을 진행한 프로젝트입니다.<br/>" +
        "<br/>참여율 : 약 50% <br/>(CONTENTSDEAL / DEAL / STRUCTURE / SCENARIO / PARTNERS 페이지 참여)<br/> <a class='con-txt__link' href='http://contentsdeal.net/#/condeal' target='_blank'>Contents Deal Intro 바로가기</a>",
        "conImg": "condeal_intro.jpg",
        "conAlt": "condeal intro thumbnail",
        "details": {
            "noteBook": "condeal_nb.png",
            "mobile": "condeal_mobile.jpg",
            "font": "font_noto_sans.png"
        },
        "conLink": "http://contentsdeal.net/#/condeal"
    },
    "KstarDay": {
        "conTitle": "KSTAR SponsorDay",
        "conSubTitle": "KSTARGROUP과 울산현대축구단의 스폰서십 체결 기념 경기의 이벤트 페이지 : KSTAR Day 이벤트 페이지 퍼블리싱을 전담하였습니다.",
        "conTxt": "KSTARGROUP과 울산현대축구단의 스폰서십 체결 기념 경기의 이벤트 페이지 퍼블리싱을 전담하였습니다.<br/>" +
        "이 페이지를 이용하여 실제 울산현대 경기관중을 대상으로 투표 및 추첨 이벤트를 진행하였습니다.<br/><br/>" +
        "참여율 : 100%<br/><a class='con-txt__link' href='/sponsor-day/index.html' target='_blank'>KSTAR DAY 이벤트 페이지 바로가기</a>",
        "conImg": "sponday.jpg",
        "conAlt": "kstar sponsor day thumbnail",
        "details": {
            "noteBook": "kstarday_nb.png",
            "mobile": "kstarday_mobile.jpg",
            "font": "font_noto_sans.png"
        },
        "conLink": "#"
    },
    "Kstar2_0": {
        "conTitle": "KSTAR <span class='inherit__txt'>2.0</span>",
        "conSubTitle": "KSTARGROUP의 공연 티켓팅 플랫폼 : KSTAR 2.0 버전의 퍼블리싱에 참여하였습니다.",
        "conTxt": "KSTARGROUP의 공연 티켓팅 플랫폼 Kstar.tv의 3.0버전 퍼블리싱을 전담하였습니다.<br/> 처음으로 Angular 기반의 개발환경에서 작업하였고, 크로스브라우징 및 모바일 기기별 호환성 작업을 진행하였습니다." +
        "<br/>이 페이지를 통해 코리아뮤직페스티벌, kSL, 제주한류페스티벌, APAN, AAA 등 다양한 공연 및 행사 티켓팅을 성공적으로 완료하였습니다." +
        "<br/><br/>참여율 : 약 80%<br/><a class='con-txt__link' href='http://kstar.tv' target='_blank'>KSTAR 2.0 바로가기</a>",
        "conImg": "kstar2.0.jpg",
        "conAlt": "kstar2.0 thumbnail",
        "details": {
            "noteBook": "kstar2_0_nb.png",
            "mobile": "kstar2.0Mobile.jpg",
            "font": "font_noto_sans.png"
        },
        "conLink": "https://www.kstar.tv",
    },
    "StarPay": {
        "conTitle": "STARPAY Main",
        "conSubTitle": "KSTARGROUP의 결제수단인 STAR의 충전 및 결제가 가능한 홈페이지 : STARPAY.tv의 메인 퍼블리싱을 담당하였습니다.",
        "conTxt": "KSTARGROUP의 결제수단인 STAR의 충전 및 결제가 가능한 홈페이지의 메인 퍼블리싱을 담당하였습니다.<br/>처음으로 Full Page 레이아웃으로 작업하였고, 다양한 기기별 호환성 작업 또한 진행하였습니다.<br/>" +
        "<br/>참여율 : 약 10% (메인 페이지만 진행)<br/><a class='con-txt__link' href='http://www.starpay.tv' target='_blank'>STARPAY 바로가기</a>",
        "conImg": "pay.jpg",
        "conAlt": "starpay thumbnail",
        "details": {
            "noteBook": "starpay_nb.png",
            "mobile": "starpay_mobile.jpg",
            "font": "font_noto_sans.png"
        },
        "conLink": "https://www.starpay.tv/"
    },
    "StarCoin": {
        "conTitle": "STARCOIN Main",
        "conSubTitle": "KSTARGROUP의 암호화폐 KST에 관한 정보와 소식을 전달하는 홈페이지 : STARCOIN.tv의 메인 퍼블리싱을 담당하였습니다.",
        "conTxt": "KSTARGROUP의 암호화폐 KST를 소개하는 웹 페이지 starcoin.tv의 메인 페이지 퍼블리싱을 담당하였습니다.<br/>" +
        "<br/>참여율 : 약 10% (메인 페이지만 진행)<br/><a class='con-txt__link' href='http://www.starcoin.tv' target='_blank'>STARCOIN 바로가기</a>",
        "conImg": "starcoin.jpg",
        "details": {
            "noteBook": "starcoin_nb.png",
            "mobile": "starcoin_mobile.jpg",
            "font": "font_noto_sans.png"
        },
        "conLink": "https://www.starcoin.tv/"
    },
    "Opus": {
        "conTitle": "OPUS DESIGN",
        "conSubTitle": "부산의 PT 전문 디자인 업체 : OPUS DESIGN의 홈페이지 제작을 전담하였습니다.",
        "conTxt": "부산의 PT 전문 디자인 업체 OPUS Design의 홈페이지 제작을 전담하였습니다.<br/>" +
        "반응형 웹으로 제작 되었고, 퍼블리싱 뿐만 아니라 업체의 요구에 따라 배너, 포트폴리오, 클라이언트 리스트를 업체에서 직접 관리할 수 있도록,<br/>" +
        "PHP와 mySQL을 이용한 데이터베이스 연동 작업 또한 진행하였습니다." +
        "<br/><br/>참여율 : 약 100% <br/><a class='con-txt__link' href='http://opusdesign.kr' target='_blank'>OPUS DESIGN 바로가기</a>",
        "conImg": "opus_thumb.jpg",
        "conAlt": "opus-design thumbnail",
        "details": {
            "noteBook": "opus_nb.png",
            "mobile": "opus_mobile.jpg",
            "font": "font_nanum_square.png"
        },
        "conLink": "http://opusdesign.kr/"

    },
    "Raon": {
        "conTitle": "RAON",
        "conSubTitle": "국내최초 윤활장비 제조업체 : RAON의 홈페이지 퍼블리싱을 전담하였습니다.",
        "conTxt": "국내최초 윤활장비 제조업체 RAON의 홈페이지 퍼블리싱을 담당하였습니다.<br/>" +
        "처음으로 외주를 받아 진행한 프로젝트로, 디자인 및 게시판을 제외한 모든 퍼블리싱 작업을 하였습니다.<br/>" +
        "<br/>참여율 : 약 90% (게시판 제외) <br/><a class='con-txt__link' href='http://raonco.kr' target='_blank'>RAON 바로가기</a>",
        "conImg": "raon_thumb.jpg",
        "conAlt": "raon thumbnail",
        "details": {
            "noteBook": "raon_nb.png",
            "mobile": "raon_mobile.jpg",
            "font": "font_nanum_square.png"
        },
        "conLink": "http://raonco.kr/"
    },
}


//상세페이지 이동
function pageNum(pn) {
    localStorage.setItem('pageNum', pn);
    location.href = 'details.html';
}