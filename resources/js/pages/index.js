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
    })

    var back = "c";
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
    });

    var conLength = Object.keys(work_lists).length;

    for (props in work_lists) {
        $('.website-work').append(
            '<a class="work-list col-md-6 col-xs-12" onclick="pageNum(&#39;'+ props +'&#39;)">' +
            '   <div class="work-list-dimmer">' +
            '     <p class="dimmer-txt">' +
            '       <span>자세히 보기 ></span>' +
            '     </p>' +
            '   </div>' +
            '   <img src="resources/images/' + work_lists[props].conImg +'" alt="'+ work_lists[props].conAlt + '"/>' +
            '   <h5 class="con-title">' + work_lists[props].conTitle + '</h5>' +
            '   <p class="con-txt">' + work_lists[props].conTxt + '</p>' +
            '</a>'
        );
    }
});


var work_lists = {
    "Raon": {
        "conTitle"    : "RAON",
        "conSubTitle" : "",
        "conTxt"      : "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.0",
        "conImg"      : "raon_thumb.jpg",
        "conAlt"      : "raon thumbnail",
    },
    "Opus": {
        "conTitle"    : "OPUS DESIGN",
        "conSubTitle" : "",
        "conTxt"      : "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.1",
        "conImg"      : "opus_thumb.jpg",
        "conAlt"      : "opus-design thumbnail"
    },
    "Kstar2_0": {
        "conTitle"    : "KSTAR <span class='inherit__txt'>2.0</span>",
        "conSubTitle" : "",
        "conTxt"      : "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.2",
        "conImg"      : "kstar2.0.jpg",
        "conAlt"      : "kstar2.0 thumbnail"
    },
    "Kstar2_5": {
        "conTitle"    : "KSTAR <span class='inherit__txt'>2.5</span>",
        "conSubTitle" : "",
        "conTxt"      : "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.3",
        "conImg"      : "kstar2.51.jpg",
        "conAlt"      : "kstar2.5 thumbnail",
        "details"     : {
            "noteBook"  : "kstar2.5_nb.png",
            "mobile"    : "kstar2.5Mobile_3.jpg"
        }
    },
    "StarPay": {
        "conTitle"    : "STARPAY Main",
        "conSubTitle" : "",
        "conTxt"      : "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.4",
        "conImg"      : "pay.jpg",
        "conAlt"      : "starpay thumbnail"
    },
    "StarCoin": {
        "conTitle"    : "STARCOIN Main",
        "conSubTitle" : "",
        "conTxt"      : "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.5",
        "conImg"      : "starcoin.jpg",
        "conAlt"      : "starcoin thumbnail"
    },
    "KstarDay": {
        "conTitle"    : "KSTAR SponsorDay",
        "conSubTitle" : "",
        "conTxt"      : "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.6",
        "conImg"      : "sponday.jpg",
        "conAlt"      : "kstar sponsor day thumbnail"
    },
    "Condeal": {
        "conTitle"    : "Condeal Intro",
        "conSubTitle" : "",
        "conTxt"      : "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.7",
        "conImg"      : "condeal_intro.jpg",
        "conAlt"      : "condeal intro thumbnail"
    }
}


//상세페이지 이동
function pageNum(pn) {
    pageNum = pn;
    localStorage.setItem('pageNum', pageNum);
    location.href = 'details.html';
}