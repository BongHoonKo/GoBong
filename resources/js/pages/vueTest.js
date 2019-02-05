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
        users1: []
    },
    created: function () {
        var color = $('.app p').css('color');
        console.log(color);
    },
    mounted: function () {
        this.getAllUsers();
        this.getSubject();
    },
    methods: {
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
        getSubject: function(){
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
