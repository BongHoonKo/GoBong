Vue.component('item-list', {
    props: ['items'],
    template: "<li>{{items.id}} : {{items.text}}</li>"
});

var count = 0;
var path = "resources/images/"

var imgAlt = {
    testImg: {
        ko: "테스트이미지",
        en: "Test IMG",
        zh: "듕귁"
    }
}


var app = new Vue({
    el: ".app",
    data: {
        msg: "Test",
        msg1: "테스트 문구 입니다.",
        rawHTML: "<span style='color:blue'>rawHTML!!</span>",
        items: [
            {id: 0, text: "0000"},
            {id: 1, text: "1111"},
            {id: 2, text: "2222"},
            {id: 3, text: "3333"},
            {id: 4, text: "4444"}
        ],
        title: "ffff",
        seen: true,
        href: "http://www.naver.com",
        imgSrc: path + "js.png",
        imgAlt: imgAlt.testImg.ko,
        isDisabled: true,
        users: [],
        users1: [],
        firstName: "BongHoon",
        lastName: "Ko",
        selected: "ko",
        LANG: "한국어",
        lang: {
            ko : "한국어",
            en : "English",
            zh : "듕귁"
        }
    },
    created: function () {
        var color = $('.app p').css('color');
        console.log(color);
    },
    mounted: function () {
        this.getAllUsers();
        this.getSubject();
    },
    computed: {
        computedTest: function () {
            return this.msg1.split('').reverse().join('');
        },
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    },
    methods: {
        changeLangs: function(){
            this.LANG = this.lang[this.selected];
        },
        getAllUsers: function () {
            axios.get("http://fotrise3.cafe24.com/api.php?action=read")
                .then(function (response) {
                    if (response.data.error) {
                        console.log('Database error');
                    } else {
                        app.users = response.data.g5;
                        console.log(response);
                    }
                });
        },
        getSubject: function () {
            axios.get("http://fotrise3.cafe24.com/api.php?action=subject")
                .then(function (response) {
                    if (response.data.error) {
                        console.log('Database error');
                    } else {
                        app.users1 = response.data.g51;
                        console.log(response);
                    }
                });
        },
        /* msg 변경 */
        reverseText: function () {
            this.msg = this.msg.split('').reverse().join('');
            if (count == 0) {
                $('.app p').css('color', 'red');
                count = 1;
            } else {
                $('.app p').css('color', '#fff');
                count = 0;
            }
        },

        /* Method & Computed 구분을 위한 메소드*/
        methodTest: function () {
            return this.msg1.split('').reverse().join('');
        },

        /* 리스트 뒤에 요소 추가 */
        pushItem: function () {
            var text = $('.inputs').val();
            var length = this.items.length;
            this.items.push({id: length, text: text});
        },

        /* 리스트 앞에 요소 추가 */
        unshiftItem: function () {
            var text = $('.inputs').val();
            for (var i = 0; i <= this.items.length - 1; i++) {
                this.items[i].id = this.items[i].id + 1;
            }
            this.items.unshift({id: 0, text: text});
        },

        /* img Alt 값 다국어 처리 */
        changeLang: function () {
            var thisLang = $('.select-lang').val();
            app.imgAlt = eval('imgAlt.testImg.' + thisLang);
        }
    }
});

app.title = app.msg;

obj = {msg: "FREEZE"}
/*Object.freeze(obj);*/
var app2 = new Vue({
    el: ".app-2",
    data: obj
});

app2.$watch('msg', function (newVal, oldVal) {
    console.log(newVal + " / " + oldVal);
});


Vue.component('my-comp',{
    template: "<p class='gobong is good'>gobongs</p>"
});


var watch = new Vue({
    el: ".watch",
    data: {
        question: "",
        answer: "질문 입력 하셈!",
        isActive: true,
        toggle: false,
        activeColor: 'red',
        fontStyle: {
            fontSize: '30px',
            fontWeight: "normal",
            display: "inline-block",
            transform: "rotate(90deg)"
        },
        ok: 'ok',
        loginType: "username",
        items: [
            { msg : "ONE" },
            { msg : "TWO" },
            { msg : "THREE" }
        ],
        obj : {
            a: "aa",
            b: "bb",
            c: "cc"
        },
    },
    watch: {
        question: function(newQuestion) {
            this.answer = "타이핑 중.....";
            this.getAnswer();
        }
    },
    methods: {
        changeType: function(){
            if(this.loginType == 'username') {
                this.loginType = "email";
            }
            else {
                this.loginType = "username";
            }
        },
        getAnswer: _.debounce(
            function(){
                if(this.question.indexOf('?') === -1) {
                    this.answer = "?가 없어여";
                    return
                }
                this.answer = "생각중..."
                var watch = this;
                axios.get('http://fotrise3.cafe24.com/answer.php?question='+this.question)
                    .then(function(response){
                        watch.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function(error){
                        watch.answer = "에러! : " + error
                    })
            }, 500
        )
    }
});