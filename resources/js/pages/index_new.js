$(function () {
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

    /* animation offset */
    $(window, document).on('load scroll', function () {
        var scrollTop = $(this).scrollTop();
        /*console.log(scrollTop);*/
        $('.port-content').each(function () {
            var contentOffset = $(this).offset();
            /* console.log(contentOffset.top);*/
            if (scrollTop >= contentOffset.top - 350) {
                $(this).addClass('fadein');
                if ($(this).hasClass('port-about__box') == true) {
                    $(this).find('.port-about__li').addClass('upanimation');
                }
                if ($(this).hasClass('port-skill') == true) {
                    $(this).find('.profile-skill__li').addClass('fadein');
                }
            }
            // 밑 바닥 !!
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                $('.port-contact').addClass('fadein');
            }
        });

        // Top Nav Background Toggle
        if (scrollTop !== 0) {
            $('.portfolio__hd').addClass('scrolling');
        } else {
            $('.portfolio__hd').removeClass('scrolling')
        }

        // TOP Button
        if (scrollTop >= 100) {
            $('.top__btn').fadeIn(200);
        } else {
            $('.top__btn').fadeOut(200);
        }

        // msie detection
        if ($.browser.msie) {
            $('body').addClass('msie');
        }
    });

    /* About 리스트 애니메이션 */
    $('.port-about__li,.profile-skill__li').each(function () {
        var aboutIndex = $(this).index() + 1;
        $(this).css('animation-delay', aboutIndex * 0.2 + 's');
    });

    /* 메인 네비 이벤트 */
    $('.port-top__nav .port-top__li, .port-mobile__list li').click(function () {
        var thisText = $(this).text().toLowerCase();
        if (thisText == 'home') {
            $('html,body').animate({'scrollTop': '0'}, 300);
        } else {
            var thisOffset = $('.port-' + thisText).offset();
            $('html,body').animate({'scrollTop': thisOffset.top - 100}, 500);
        }
        portfolio.mobileMenuActive = false;
    });
});


var portfolio = new Vue({
    el: '.port__wrap',
    data: {
        mainMenuActive: false,
        detailPopup: false,
        mobileMenuActive: false,
        portKey: "",
        workList: {
            Kstar3_0: {
                conTitle: "KSTAR ver 3.0",
                conSubTitle: "KSTARGROUP의 공연 티켓팅 플랫폼 : KSTAR 3.0 버전의 퍼블리싱을 전담 하였습니다.",
                conTxt: "KSTARGROUP의 공연 티켓팅 플랫폼 Kstar.tv의 3.0버전 퍼블리싱을 전담하였습니다. 처음으로 PC / Mobile 분리형 웹으로 작업하였고, KSTAR 2.0을 보완하고 웹접근성을 고려하여 제작하였습니다.",
                conImg: "kstar2.51.jpg",
                conAlt: "kstar2.5 thumbnail",
                conLink: "/kstar3.0/kstar3.0_Mobile/m_index.html",
                conDate: "미출시",
                conClient: "(주)KSTAR PAY",
                conGauge: "100%",
                conLang: "HTML / CSS / jQuery / Sass",
                conDetailImg: "kstar3-top.png",
                conMobile: "kstar2.5Mobile_1.jpg",
                conFont: "font_noto_sans.png",
                conBottom: "kstar3-bottom.jpg"
            },
            Condeal: {
                conTitle: "Contenst Deal Intro",
                conSubTitle: "블록체인 기술을 이용한 컨텐츠 거래소 플랫폼 : Contents Deal의 소개 페이지 퍼블리싱에 참여하였습니다.",
                conTxt: "블록체인 기술을 이용한 컨텐츠 거래소 플랫폼인 Contents Deal의 소개 페이지에 일부 참여하였습니다. 반응형 웹으로 제작되었고, 처음으로 VUE.js 개발환경에서 퍼블리싱을 진행한 프로젝트입니다." +
                    "(CONTENTSDEAL / DEAL / STRUCTURE / SCENARIO / PARTNERS 페이지 참여)",
                conImg: "condeal_intro.jpg",
                conAlt: "condeal intro thumbnail",
                conLink: "/condeal_Intro/condeal.html",
                conDate: "2018. 09",
                conClient: "(주)KSTAR MUSIC",
                conGauge: "약 50%",
                conLang: "HTML / CSS / jQuery / Sass / Vue",
                conDetailImg: "condeal-top.png",
                conMobile: "condeal_mobile.jpg",
                conFont: "font_noto_sans.png",
                conBottom: "condeal-bottom.jpg"
            },
            KstarDay: {
                conTitle: "KSTAR SponsorDay",
                conSubTitle: "KSTARGROUP과 울산현대축구단의 스폰서십 체결 기념 경기의 이벤트 페이지 : KSTAR Day 이벤트 페이지 퍼블리싱을 전담하였습니다.",
                conTxt: "KSTARGROUP과 울산현대축구단의 스폰서십 체결 기념 경기의 이벤트 페이지 퍼블리싱을 전담하였습니다." +
                    "이 페이지를 이용하여 실제 울산현대 경기관중을 대상으로 투표 및 추첨 이벤트를 진행하였습니다.",
                conImg: "sponday.jpg",
                conAlt: "kstar sponsor day thumbnail",
                conLink: "/sponsor-day/index.html",
                conDate: "2018. 08",
                conClient: "(주)KSTAR GROUP",
                conGauge: "100%",
                conLang: "HTML / CSS / jQuery / Sass",
                conDetailImg: "kstarday-top.png",
                conMobile: "kstarday_mobile.jpg",
                conFont: "font_noto_sans.png",
                conBottom: "kstarday-bottom.jpg"
            },
            Kstar2_0: {
                conTitle: "KSTAR ver 2.0",
                conSubTitle: "KSTARGROUP의 공연 티켓팅 플랫폼 : KSTAR 2.0 버전의 퍼블리싱에 참여하였습니다.",
                conTxt: "KSTARGROUP의 공연 티켓팅 플랫폼 Kstar.tv의 3.0버전 퍼블리싱을 전담하였습니다. 처음으로 Angular 기반의 개발환경에서 작업하였고, 크로스브라우징 및 모바일 기기별 호환성 작업을 진행하였습니다." +
                    "이 페이지를 통해 코리아뮤직페스티벌, kSL, 제주한류페스티벌, APAN, AAA 등 다양한 공연 및 행사 티켓팅을 성공적으로 완료하였습니다.",
                conImg: "kstar2.0.jpg",
                conAlt: "kstar2.0 thumbnail",
                conLink: "https://www.kstar.tv",
                conDate: "2018. 07",
                conClient: "(주)KSTAR PAY",
                conGauge: "약 80%",
                conLang: "HTML / CSS / jQuery / Sass",
                conDetailImg: "kstar2-top.png",
                conMobile: "kstar2.0Mobile.jpg",
                conFont: "font_noto_sans.png",
                conBottom: "kstar2-bottom.jpg"
            },
            StarPay: {
                conTitle: "STARPAY Main",
                conSubTitle: "KSTARGROUP의 결제수단인 STAR의 충전 및 결제가 가능한 홈페이지 : STARPAY.tv의 메인 퍼블리싱을 담당하였습니다.",
                conTxt: "KSTARGROUP의 결제수단인 STAR의 충전 및 결제가 가능한 홈페이지의 메인 퍼블리싱을 담당하였습니다. 처음으로 Full Page 레이아웃으로 작업하였고, 다양한 기기별 호환성 작업 또한 진행하였습니다.",
                conImg: "pay.jpg",
                conAlt: "starpay thumbnail",
                conLink: "https://www.starpay.tv/",
                conDate: "2018. 07",
                conClient: "(주)KSTAR PAY",
                conGauge: "약 10% (메인 페이지만 진행)",
                conLang: "HTML / CSS / jQuery / Sass",
                conDetailImg: "starpay-top.png",
                conMobile: "starpay_mobile.jpg",
                conFont: "font_noto_sans.png",
                conBottom: "starpay-bottom.jpg"
            },
            StarCoin: {
                conTitle: "STARCOIN Main",
                conSubTitle: "KSTARGROUP의 암호화폐 KST에 관한 정보와 소식을 전달하는 홈페이지 : STARCOIN.tv의 메인 퍼블리싱을 담당하였습니다.",
                conTxt: "KSTARGROUP의 암호화폐 KST를 소개하는 웹 페이지 starcoin.tv의 메인 페이지 퍼블리싱을 담당하였습니다.",
                conImg: "starcoin.jpg",
                conLink: "https://www.starcoin.tv/",
                conDate: "2018. 06",
                conClient: "(주)KSTAR PAY",
                conGauge: "약 10% (메인 페이지만 진행)",
                conLang: "HTML / CSS / jQuery / Sass",
                conDetailImg: "starcoin-top.png",
                conMobile: "starcoin_mobile.jpg",
                conFont: "font_noto_sans.png",
                conBottom: "starcoin-bottom.jpg"
            },
            Opus: {
                conTitle: "OPUS DESIGN",
                conSubTitle: "부산의 PT 전문 디자인 업체 : OPUS DESIGN의 홈페이지 제작을 전담하였습니다.",
                conTxt: "부산의 PT 전문 디자인 업체 OPUS Design의 홈페이지 제작을 전담하였습니다." +
                    "반응형 웹으로 제작 되었고, 퍼블리싱 뿐만 아니라 업체의 요구에 따라 배너, 포트폴리오, 클라이언트 리스트를 업체에서 직접 관리할 수 있도록," +
                    "PHP와 mySQL을 이용한 데이터베이스 연동 작업 또한 진행하였습니다.",
                conImg: "opus_thumb.jpg",
                conAlt: "opus-design thumbnail",
                conLink: "http://opusdesign.kr/",
                conDate: "2018. 01",
                conClient: "(주)오퍼스 디자인",
                conGauge: "100%",
                conLang: "HTML / CSS / jQuery / PHP / mySQL",
                conDetailImg: "opus-top.png",
                conMobile: "opus_mobile.jpg",
                conFont: "font_nanum_square.png",
                conBottom: "opus-bottom.jpg"
            },
            Raon: {
                conTitle: "RAON",
                conSubTitle: "국내최초 윤활장비 제조업체 : RAON의 홈페이지 퍼블리싱을 전담하였습니다.",
                conTxt: "국내최초 윤활장비 제조업체 RAON의 홈페이지 퍼블리싱을 담당하였습니다." +
                    "처음으로 외주를 받아 진행한 프로젝트로, 디자인 및 게시판을 제외한 모든 퍼블리싱 작업을 하였습니다.",
                conImg: "raon_thumb.jpg",
                conAlt: "raon thumbnail",
                conLink: "http://raonco.kr/",
                conDate: "2017. 12",
                conClient: "(주)RAON",
                conGauge: "약 90% (게시판 제외)",
                conLang: "HTML / CSS / jQuery",
                conDetailImg: "raon-top.png",
                conMobile: "raon_mobile.jpg",
                conFont: "font_nanum_square.png",
                conBottom: "raon-bottom.jpg"
            }
        },

        abilityList: [
            {
                abTitle: "Coding",
                abTxt: "HTML5, CSS3, JavaScript, jQuery 등을 이용하여 디자인된 웹페이지를 코딩하여 브라우저에 구현시키는 프론트엔드 개발이 가능합니다.",
                abImg: "ico-coding.png"
            },
            {
                abTitle: "Responsive",
                abTxt: "다양한 사이즈의 스마트폰, 테블릿, PC에 맞게 레이아웃과 디자인이 변하고 움직이는 반응형 웹(미디어쿼리) 제작가능합니다.",
                abImg: "ico-responsive.png"
            },
            {
                abTitle: "Maintenance",
                abTxt: "Sass & Git을 이용하여 유지/보수에 용이한 웹페이지 구성이 가능합니다.",
                abImg: "ico-maintenance.png"
            }
        ],
        basicInfo: [
            {basicTitle: "이름", basicTxt: "고봉훈"},
            {basicTitle: "생년월일", basicTxt: "1992.01.04"},
        ],
        careerList: [
            {datetime: "2009. 02", text: "동래고등학교 졸업"},
            {datetime: "2018. 02", text: "부산대학교 디자인학과 시각디자인전공(학사)"},
            {datetime: "2017. 12", text: "(주) RAON 홈페이지 퍼블리싱"},
            {datetime: "2018. 01", text: "(주) OPUS DESIGN 홈페이지 제작"},
            {datetime: "2018. 05<br/>~ 2019. 01", text: "(주) KSTARPAY 웹퍼블리시팀 매니저"}
        ],

        skillList: [
            {
                skillName: "HTML & CSS",
                skillTxt: "HTML, CSS 하드코딩이 가능하며, 다양한 사이즈의 스마트폰, 테블릿, PC에 맞게 레이아웃과 디자인이 변하고 움직이는 반응형 웹(미디어쿼리) 제작가능합니다.",
                skillGauge: "90",
                borderColor: "#307bbb"
            },
            {
                skillName: "javascript & jQuery",
                skillTxt: "스크롤효과, 애니메이션 등 각 종 스크립트 효과를 이용한 동적인 웹 코딩이 가능하며, 플러그인 활용이 가능합니다.",
                skillGauge: "65",
                borderColor: "#ffbd51"
            },
            {
                skillName: "Sass",
                skillTxt: "Sass를 이용하여 자주쓰는 속성을 변수,믹스인으로 만들어 이용 가능하며, 모듈화를 통한 유지·보수에 용이한 스타일 코딩이 가능합니다.",
                skillGauge: "82",
                borderColor: "#c6538c"
            },
            {
                skillName: "Photoshop & Illustrator",
                skillTxt: "그래픽 툴을 이용하여 간단한 웹 배너, 아이콘 등과 같은 그래픽 제작 및 수정이 가능합니다.",
                skillGauge: "50",
                borderColor: "#181b70"
            },
            {
                skillName: "Vue.js",
                skillTxt: "프론트엔드 웹 개발자를 목표로 하여 자바스크립트 프레임워크 중 하나인 Vue.js를 공부하고 있습니다.",
                skillGauge: "25",
                borderColor: "#009688"
            },
            {
                skillName: "PHP & mySQL",
                skillTxt: "PHP와 mySQL에 관하여 전문적인 지식이 있지는 않지만, 이를 이용한 데이터베이스 연동 작업 경험이 있습니다.",
                skillGauge: "20",
                borderColor: "#563d7c"
            },
        ]
    },
    watch: {},
    methods: {
        moveTop: function () {
            $('html,body').animate({'scrollTop': '0'}, 300);
        },
        popupActive: function (key) {
            $('body').addClass('no-scrolling');
            $('.port-detail__popup').fadeIn(200).addClass('active').css('display', 'flex');
            $('.port-detail__content').scrollTop(0);
            portfolio.portKey = eval('portfolio.workList.' + key);
        },
        popupRemove: function () {
            $('body').removeClass('no-scrolling');
            $('.port-detail__popup').fadeOut(200).removeClass('active');
        }
    }
});