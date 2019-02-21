$(function(){
    /*var portWork = new Swiper('.port-work__list',{
        loop: true,
        pagination: {
            el: '.port-work__pagination',
        },
    });

    portWork.on('slideChange', function () {
        $('.port-back__txt').stop().fadeOut(200);
        setTimeout(function(){
            var activeTitle = $('.swiper-slide-active').find('.work__title').text();
            portfolio.backTxt = activeTitle;
            $('.port-back__txt').stop().fadeIn(200);
        },100)
    });*/
});


var portfolio = new Vue({
    el: '.port__wrap',
    data: {
        mainMenuActive: false,
        backTxt: "KSTAR ver 3.0",
        workList: {
            Kstar3_0: {
                conTitle: "KSTAR ver 3.0",
                conSubTitle: "KSTARGROUP의 공연 티켓팅 플랫폼 : KSTAR 3.0 버전의 퍼블리싱을 전담 하였습니다.",
                conTxt: "KSTARGROUP의 공연 티켓팅 플랫폼 Kstar.tv의 3.0버전 퍼블리싱을 전담하였습니다.<br/>처음으로 PC / Mobile 분리형 웹으로 작업하였고, KSTAR 2.0을 보완하고 웹접근성을 고려하여 제작하였습니다.<br/>" +
                    "<br/>참여율 : 100%",
                conImg: "kstar2.51.jpg",
                conAlt: "kstar2.5 thumbnail",
                conLink: "/kstar3.0/kstar3.0_Mobile/m_index.html"
            },
            Condeal: {
                conTitle: "Contenst Deal Intro",
                conSubTitle: "블록체인 기술을 이용한 컨텐츠 거래소 플랫폼 : Contents Deal의 소개 페이지 퍼블리싱에 참여하였습니다.",
                conTxt: "블록체인 기술을 이용한 컨텐츠 거래소 플랫폼인 Contents Deal의 소개 페이지에 일부 참여하였습니다.<br/>반응형 웹으로 제작되었고, 처음으로 VUE.js 개발환경에서 퍼블리싱을 진행한 프로젝트입니다.<br/>" +
                   "<br/>참여율 : 약 50% <br/>(CONTENTSDEAL / DEAL / STRUCTURE / SCENARIO / PARTNERS 페이지 참여)",
                conImg: "condeal_intro.jpg",
                conAlt: "condeal intro thumbnail",
                conLink: "/condeal_Intro/condeal.html"
            },
            KstarDay: {
                conTitle: "KSTAR SponsorDay",
                conSubTitle: "KSTARGROUP과 울산현대축구단의 스폰서십 체결 기념 경기의 이벤트 페이지 : KSTAR Day 이벤트 페이지 퍼블리싱을 전담하였습니다.",
                conTxt: "KSTARGROUP과 울산현대축구단의 스폰서십 체결 기념 경기의 이벤트 페이지 퍼블리싱을 전담하였습니다.<br/>" +
                   "이 페이지를 이용하여 실제 울산현대 경기관중을 대상으로 투표 및 추첨 이벤트를 진행하였습니다.<br/><br/>" +
                   "참여율 : 100%",
                conImg: "sponday.jpg",
                conAlt: "kstar sponsor day thumbnail",
                conLink: "/sponsor-day/index.html"
            },
            Kstar2_0: {
                conTitle: "KSTAR ver 2.0",
                conSubTitle: "KSTARGROUP의 공연 티켓팅 플랫폼 : KSTAR 2.0 버전의 퍼블리싱에 참여하였습니다.",
                conTxt: "KSTARGROUP의 공연 티켓팅 플랫폼 Kstar.tv의 3.0버전 퍼블리싱을 전담하였습니다.<br/> 처음으로 Angular 기반의 개발환경에서 작업하였고, 크로스브라우징 및 모바일 기기별 호환성 작업을 진행하였습니다." +
                   "<br/>이 페이지를 통해 코리아뮤직페스티벌, kSL, 제주한류페스티벌, APAN, AAA 등 다양한 공연 및 행사 티켓팅을 성공적으로 완료하였습니다." +
                   "<br/><br/>참여율 : 약 80%",
                conImg: "kstar2.0.jpg",
                conAlt: "kstar2.0 thumbnail",
                conLink: "https://www.kstar.tv",
            },
            StarPay: {
                conTitle: "STARPAY Main",
                conSubTitle: "KSTARGROUP의 결제수단인 STAR의 충전 및 결제가 가능한 홈페이지 : STARPAY.tv의 메인 퍼블리싱을 담당하였습니다.",
                conTxt: "KSTARGROUP의 결제수단인 STAR의 충전 및 결제가 가능한 홈페이지의 메인 퍼블리싱을 담당하였습니다.<br/>처음으로 Full Page 레이아웃으로 작업하였고, 다양한 기기별 호환성 작업 또한 진행하였습니다.<br/>" +
                   "<br/>참여율 : 약 10% (메인 페이지만 진행)",
                conImg: "pay.jpg",
                conAlt: "starpay thumbnail",
                conLink: "https://www.starpay.tv/"
            },
            StarCoin: {
                conTitle: "STARCOIN Main",
                conSubTitle: "KSTARGROUP의 암호화폐 KST에 관한 정보와 소식을 전달하는 홈페이지 : STARCOIN.tv의 메인 퍼블리싱을 담당하였습니다.",
                conTxt: "KSTARGROUP의 암호화폐 KST를 소개하는 웹 페이지<br/> starcoin.tv의 메인 페이지 퍼블리싱을 담당하였습니다.<br/>" +
                   "<br/>참여율 : 약 10% (메인 페이지만 진행)",
                conImg: "starcoin.jpg",
                conLink: "https://www.starcoin.tv/"
            },
            Opus: {
                conTitle: "OPUS DESIGN",
                conSubTitle: "부산의 PT 전문 디자인 업체 : OPUS DESIGN의 홈페이지 제작을 전담하였습니다.",
                conTxt: "부산의 PT 전문 디자인 업체 OPUS Design의 홈페이지 제작을 전담하였습니다.<br/>" +
                   "반응형 웹으로 제작 되었고, 퍼블리싱 뿐만 아니라 업체의 요구에 따라<br/> 배너, 포트폴리오, 클라이언트 리스트를 업체에서 직접 관리할 수 있도록,<br/>" +
                   "PHP와 mySQL을 이용한 데이터베이스 연동 작업 또한 진행하였습니다." +
                   "<br/><br/>참여율 : 약 100% ",
                conImg: "opus_thumb.jpg",
                conAlt: "opus-design thumbnail",
                conLink: "http://opusdesign.kr/"

            },
            Raon: {
                conTitle: "RAON",
                conSubTitle: "국내최초 윤활장비 제조업체 : RAON의 홈페이지 퍼블리싱을 전담하였습니다.",
                conTxt: "국내최초 윤활장비 제조업체 RAON의 홈페이지 퍼블리싱을 담당하였습니다.<br/>" +
                   "처음으로 외주를 받아 진행한 프로젝트로, 디자인 및 게시판을 제외한 모든 퍼블리싱 작업을 하였습니다.<br/>" +
                   "<br/>참여율 : 약 90% (게시판 제외)",
                conImg: "raon_thumb.jpg",
                conAlt: "raon thumbnail",
                conLink: "http://raonco.kr/"
            }
        }
    },
    watch: {},
    methods: {}
});