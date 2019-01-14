$(function () {

    $(window).on('load resize',function(){
        var win_width = $(window).width();
        var main_height = win_width * 0.75;
        if(win_width <= 992) {
            $('.main-top').height(main_height);
        }
        else {
            $('.main-top').height('100%');
        }
    });

    $('.main-nav li').click(function(){
        var thisTarget = $(this).attr('data-target');
        if(thisTarget == 'home') {
            $('html,body').animate({'scrollTop' : '0'},300);
        }
        else {
            var targetOffset = $('.' + thisTarget).offset();
            $('html,body').animate({'scrollTop' : (targetOffset.top - 82) + 'px'},300);
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
            '<a href="javascript:void(0);" class="work-list col-md-4 col-xs-12" onclick="pageNum(&#39;'+ props +'&#39;)">' +
            '   <div class="work-list-dimmer">' +
            '     <p class="dimmer-txt">' +
            '       <span>자세히 보기 ></span>' +
            '     </p>' +
            '   </div>' +
            '   <img src="resources/images/' + work_lists[props].conImg +'" alt="'+ work_lists[props].conAlt + '"/>' +
            '   <h5 class="con-title">' + work_lists[props].conTitle + '</h5>' +
            '   <p class="con-txt">' + work_lists[props].conSubTitle + '</p>' +
            '</a>'
        );
    }
});


var work_lists = {
    "Kstar3_0": {
        "conTitle"    : "KSTAR <span class='inherit__txt'>3.0</span>",
        "conSubTitle" : "KSTARGROUP의 공연 티켓팅 플랫폼 : KSTAR 3.0 버전의 퍼블리싱을 전담 하였습니다.",
        "conTxt"      : "",
        "conImg"      : "kstar2.51.jpg",
        "conAlt"      : "kstar2.5 thumbnail",
        "details"     : {
            "noteBook"  : "kstar2.5_nb.png",
            "mobile"    : "kstar2.5Mobile_3.jpg"
        }
    },
    "Condeal": {
        "conTitle"    : "Contenst Deal Intro",
        "conSubTitle" : "블록체인 기술을 이용한 컨텐츠 거래소 플랫폼 : Contents Deal의 소개 페이지 퍼블리싱에 참여하였습니다.",
        "conTxt"      : "",
        "conImg"      : "condeal_intro.jpg",
        "conAlt"      : "condeal intro thumbnail"
    },
    "KstarDay": {
        "conTitle"    : "KSTAR SponsorDay",
        "conSubTitle" : "KSTARGROUP과 현대울산축구단의 스폰서십 체결 기념 경기의 이벤트 페이지 : KSTAR Day 이벤트 페이지 퍼블리싱을 전담하였습니다.",
        "conTxt"      : "",
        "conImg"      : "sponday.jpg",
        "conAlt"      : "kstar sponsor day thumbnail"
    },
    "Kstar2_0": {
        "conTitle"    : "KSTAR <span class='inherit__txt'>2.0</span>",
        "conSubTitle" : "KSTARGROUP의 공연 티켓팅 플랫폼 : KSTAR 2.0 버전의 퍼블리싱에 참여하였습니다.",
        "conTxt"      : "",
        "conImg"      : "kstar2.0.jpg",
        "conAlt"      : "kstar2.0 thumbnail"
    },
    "StarPay": {
        "conTitle"    : "STARPAY Main",
        "conSubTitle" : "KSTARGROUP의 결제수단인 STAR의 충전 및 결제가 가능한 홈페이지 : STARPAY.tv의 메인 퍼블리싱을 담당하였습니다.",
        "conTxt"      : "",
        "conImg"      : "pay.jpg",
        "conAlt"      : "starpay thumbnail"
    },
    "StarCoin": {
        "conTitle"    : "STARCOIN Main",
        "conSubTitle" : "KSTARGROUP의 암호화폐 KST에 관한 정보와 소식을 전달하는 홈페이지 : STARCOIN.tv의 메인 퍼블리싱을 담당하였습니다.",
        "conTxt"      : "",
        "conImg"      : "starcoin.jpg",
        "conAlt"      : "starcoin thumbnail"
    },
    "Opus": {
        "conTitle"    : "OPUS DESIGN",
        "conSubTitle" : "부산의 PT 전문 디자인 업체 : OPUS DESIGN의 홈페이지 제작을 전담하였습니다.",
        "conTxt"      : "",
        "conImg"      : "opus_thumb.jpg",
        "conAlt"      : "opus-design thumbnail"
    },
    "Raon": {
        "conTitle"    : "RAON",
        "conSubTitle" : "국내최초 윤활장비 제조업체 : RAON의 홈페이지 퍼블리싱을 전담하였습니다.",
        "conTxt"      : "",
        "conImg"      : "raon_thumb.jpg",
        "conAlt"      : "raon thumbnail",
    },
}


//상세페이지 이동
function pageNum(pn) {
    localStorage.setItem('pageNum', pn);
    location.href = 'details.html';
}