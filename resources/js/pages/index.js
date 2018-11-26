$(function () {
    var conLength = Object.keys(work_lists).length;

    for (props in work_lists) {
        $('.website-work').append(
            '<a href="" class="work-list col-md-6 col-xs-12">' +
            '   <div class="work-list-dimmer">' +
            '     <p class="dimmer-txt">' +
            '       <span>자세히 보기 ></span>' +
            '     </p>' +
            '   </div>' +
            '   <img src="resources/images/'+ work_lists[props].conImg +'" alt="'+work_lists[props].conAlt+'"/>' +
            '   <h5 class="con-title">'+work_lists[props].conTitle+'</h5>' +
            '   <p class="con-txt">'+work_lists[props].conTxt+'</p>' +
            '</a>'
        );
    }
});


var work_lists = {
    "work1": {
        "conTitle": "RAON",
        "conTxt": "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.0",
        "conImg": "raon_thumb.jpg",
        "conAlt": "raon thumbnail"
    },
    "work2": {
        "conTitle": "OPUS DESIGN",
        "conTxt": "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.1",
        "conImg": "opus_thumb.jpg",
        "conAlt": "opus-design thumbnail"
    },
    "work3": {
        "conTitle": "KSTAR 2.0",
        "conTxt": "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.2",
        "conImg": "kstar2.0.jpg",
        "conAlt": "kstar2.0 thumbnail"
    },
    "work4": {
        "conTitle": "KSTAR 2.5",
        "conTxt": "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.3",
        "conImg": "kstar2.51.jpg",
        "conAlt": "kstar2.5 thumbnail"
    },
    "work5": {
        "conTitle": "STARPAY Main",
        "conTxt": "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.4",
        "conImg": "pay.jpg",
        "conAlt": "starpay thumbnail"
    },
    "work6": {
        "conTitle": "STARCOIN Main",
        "conTxt": "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.5",
        "conImg": "starcoin.jpg",
        "conAlt": "starcoin thumbnail"
    },
    "work7": {
        "conTitle": "KSTAR SponsorDay",
        "conTxt": "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.6",
        "conImg": "sponday.jpg",
        "conAlt": "kstar sponsor day thumbnail"
    },
    "work8": {
        "conTitle": "Condeal Intro",
        "conTxt": "다 계절이 불러 사람들의 그러나 이국 언덕 봅니다. 위에 지나고 아름다운 경, 내린 거외다.7",
        "conImg": "condeal_intro.jpg",
        "conAlt": "condeal intro thumbnail"
    }
}