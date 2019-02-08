$(function () {
    // 화면 사이즈별 폰트사이즈 조절 TEST
    $(window).on('load resize', function () {
        var win_width = $(window).width();
        if (win_width < 1080) {
            $('html, body').css('font-size', (win_width / 1080) * 30 + 1 + "px");
            if (win_width <= 320) {
                $('html, body').css('font-size', "10px");
            }
        } else {
            $('html, body').css('font-size', "25px");
        }

        $('.list-content').each(function () {
            var listHeight = $(this).outerHeight();
            $(this).height(listHeight);
        });
    });
});

var myList = new Vue({
    el: ".my-list__wrap",
    data: {
        lists: [],
        seen: false,
        active_el: -1,
        clickedUser: {},
        deleteModal: false,
        inActive: false,
        password: "",
        isName: localStorage.getItem('localName'),
        isName1: "",
        isUserOk: false
    },
    mounted: function () {
        this.getTestList();
    },
    watch: {
        isName : function(val) {
            localStorage.setItem('localName',val);
        }
    },
    methods: {
        getTestList: function () {
            axios.get("http://fotrise3.cafe24.com/list.php?action=read")
                .then(function (response) {
                    if (response.data.error) {
                        console.log('Database error');
                    } else {
                        myList.lists = response.data.list;
                        console.log(response);
                        var swiper = new Swiper('.swiper-container');
                        setTimeout(function () {
                            var swiper = new Swiper('.swiper-container', {
                                initialSlide: 1
                            });
                        }, 300);
                        setTimeout(function () {
                            $('.dimmer').fadeOut(200);
                        }, 500);
                    }
                });
        },
        deleteList: function (pw) {
            //console.log(app.newUser);
            var formData = myList.toFormData(myList.clickedUser);
            console.log(myList.clickedUser);

            axios.post("http://fotrise3.cafe24.com/list.php?action=delete&password=" + this.password, formData)
                .then(function (response) {
                    myList.clickedUser = {};
                    if (response.data.error) {
                    } else {
                        console.log(response);
                        myList.getTestList();
                    }
                });
        },
        selectUser: function (list) {
            myList.clickedUser = list;
            console.log(list);
        },

        toFormData: function (obj) {
            var form_data = new FormData();
            for (var key in obj) {
                form_data.append(key, obj[key]);
            }
            return form_data;
        },

        activate: function (el) {
            if (this.active_el == el) {
                this.active_el = -1;
                console.log(this.active_el);
            } else {
                this.active_el = el;
                console.log(this.active_el);
            }
            /*if(this.inActive == false) {
                this.inActive = true;
            }
            else {
                this.inActive = false;
            }*/
        },

        inputUser: function () {
            if(this.isName1 == "") {
                alert('입력값이 없음!');
            }
            else {
                localStorage.setItem('localName', this.isName1);
                this.isName = localStorage.getItem('localName');
                this.isName1 = "";
            }
        },

        logOut: function(){
            this.isName = "";
            location.reload();
        }
    }
});

/*
function setHeight(elm) {
    var $thisParent = $(elm).closest('.my-list__li');
    var thisActive = $thisParent.hasClass('active');
    var listHeight = $(elm).siblings('.list-content').height();
    var topHeight = $(elm).outerHeight();
    if (thisActive == true) {
        $thisParent.height('6rem');
        $thisParent.removeClass('active');
    } else {
        $thisParent.height(topHeight + listHeight + 'px');
        $thisParent.addClass('active');
    }
}*/

/*
function setHeight() {
    $('.list-top').each(function () {
        $(this).click(function () {
            var $thisParent = $(this).closest('.my-list__li');
            var listHeight = $(this).siblings('.list-content').height();
            var topHeight = $(this).outerHeight();
            var thisActive = $thisParent.hasClass('active');
            if (thisActive == true) {
                $thisParent.height('6rem');
                $thisParent.removeClass('active');
            } else {
                $thisParent.height(topHeight + listHeight + 'px');
                $thisParent.addClass('active');
            }
        });
    });
}*/
