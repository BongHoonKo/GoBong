$(function () {
    // 화면 사이즈별 폰트사이즈 조절 TEST
    $(window).on('load resize', function () {
        var win_width = $(window).width();
        if (win_width < 1080) {
            $('html, body').css('font-size', (win_width / 1080) * 30 + "px");
            if (win_width <= 320) {
                $('html, body').css('font-size', "10px");
            }
        } else {
            $('html, body').css('font-size', "25px");
        }

        /*$('.list-content').each(function () {
            var listHeight = $(this).outerHeight();
            $(this).height(listHeight);
        });*/
    });
});

var myList = new Vue({
    el: ".my-list__wrap",
    data: {
        lists: [],
        comments: [],
        sessions: [],
        newList: {title: "", description: "", created: "", name: ""},
        newComment: {text: "", name: "", created: "", test_id: ""},
        loginForm: {id: "", pw: ""},
        seen: false,
        active_el: -1,
        clickedUser: {},
        deleteModal: false,
        inActive: false,
        isLogged: localStorage.getItem('isLogged'),
        myID: localStorage.getItem('myID'),
        myNickname: localStorage.getItem('myNickname'),
        myPw: localStorage.getItem('myPw'),
        isUserOk: false,
        userInputAlert: false,
        sideMenuActive: false,
        signUpFormActive: false,
        bColor: {main: '#b5e3e5', pink: '#ff8d8d', yellow: '#ffdcaf'}
    },
    mounted: function () {
        if (this.isLogged == 'YES') {
            this.getTestList();
        }
        setTimeout(function () {
            $('.top-dimmer').fadeOut(100);
        }, 100);
    },
    watch: {
        isLogged: function (val) {
            localStorage.setItem('isLogged', val);
        },
        myID: function (val) {
            localStorage.setItem('myID', val);
        },
        myNickname: function (val) {
            localStorage.setItem('myNickname', val);
        },
        myPw: function (val) {
            localStorage.setItem('myPw', val);
        },
    },
    methods: {
        /* 메모 리스트 데이터 불러오기 */
        getTestList: function () {
            axios.get("http://fotrise3.cafe24.com/list.php?action=read")
                .then(function (response) {
                    if (response.data.error) {
                        console.log('Database error');
                    } else {
                        myList.lists = response.data.list;
                        myList.comments = response.data.comment;
                        var listLength = myList.lists.length;
                        setTimeout(function () {
                            for (var i = 0; i <= listLength; i++) {
                                $('.my-list__li').addClass('list-animation');
                                $('.my-list__li').eq(i).css({'animation-delay': i / 10 + 's'});
                            }
                            $('.my-list__ft').css('animation-name', 'buttonUp');
                        }, 100);
                        setTimeout(function () {
                            $('.dimmer').fadeOut(200);
                        }, 500);
                    }
                });
        },

        /* 내가 쓴 데이터만 불러오기 */
        getMyList: function(myNickname) {
            axios.get("http://fotrise3.cafe24.com/list.php?action=readMyList&myNickname="+myNickname)
                .then(function (response) {
                    if (response.data.error) {
                        console.log('Database error');
                    } else {
                        myList.lists = response.data.list;
                        myList.comments = response.data.comment;
                        var listLength = myList.lists.length;
                        setTimeout(function () {
                            for (var i = 0; i <= listLength; i++) {
                                $('.my-list__li').addClass('list-animation');
                                $('.my-list__li').eq(i).css({'animation-delay': i / 10 + 's'});
                            }
                            $('.my-list__ft').css('animation-name', 'buttonUp');
                        }, 100);
                        setTimeout(function () {
                            $('.dimmer').fadeOut(200);
                        }, 500);
                    }
                });
        },

        /* 로그인 데이터 불러오기 */
        login: function () {
            var formData = myList.toFormData(myList.loginForm);

            axios.post("http://fotrise3.cafe24.com/list.php?action=login", formData)
                .then(function (response) {
                    myList.loginForm = {id: "", pw: ""};

                    if (response.data.error) {
                        console.log('Database error');
                    } else {
                        myList.sessions = response.data.session;
                        setTimeout(function () {
                            localStorage.setItem('isLogged', myList.sessions[0]);
                            localStorage.setItem('myID', myList.sessions[1]);
                            localStorage.setItem('myNickname', myList.sessions[2]);
                            localStorage.setItem('myPw', myList.sessions[3]);
                            location.reload();
                        }, 300)
                    }
                });
        },

        /* 메모 리스트 생성하기 */
        createList: function (name) {
            var formData = myList.toFormData(myList.newList);

            if (this.newList.title != "" && this.newList.description != "") {
                axios.post("http://fotrise3.cafe24.com/list.php?action=create&name=" + name, formData)
                    .then(function (response) {

                        myList.newList = {title: "", description: "", created: "", name: ""};

                        if (response.data.error) {

                        } else {
                            myList.getTestList();
                            myList.seen = false;
                        }
                    });
            } else {
                alert('입력되지 않은 칸이 있습니다.');
            }
        },

        /* 메모 리스트 댓글 불러오기 */
        commentList: function (name, test_id) {
            //console.log(app.newUser);
            var formData = myList.toFormData(myList.newComment);

            if (this.newComment.text != "") {
                axios.post("http://fotrise3.cafe24.com/list.php?action=comment&name=" + name + "&test_id=" + test_id, formData)
                    .then(function (response) {

                        myList.newComment = {text: "", name: "", created: "", test_id: ""};

                        if (response.data.error) {

                        } else {
                            myList.getTestList();
                        }
                    });
            } else {
                alert('댓글을 입력해주세요.');
            }
        },
        
        /* 메모 삭제하기 */
        deleteList: function (myNickname) {
            //console.log(app.newUser);
            var formData = myList.toFormData(myList.clickedUser);
            console.log(myList.clickedUser);

            axios.post("http://fotrise3.cafe24.com/list.php?action=delete&nick=" + myNickname, formData)
                .then(function (response) {
                    myList.clickedUser = {};
                    if (response.data.error) {
                    } else {
                        console.log(response);
                        myList.getTestList();
                    }
                });
        },

        /* 선택된 리스트 */
        selectUser: function (list) {
            myList.clickedUser = list;
            console.log(list);
        },

        /* form 데이터 저장 */
        toFormData: function (obj) {
            var form_data = new FormData();
            for (var key in obj) {
                form_data.append(key, obj[key]);
            }
            return form_data;
        },

        /* 메모 리스트 활성/비활성화 */
        activate: function (el) {
            if (this.active_el == el) {
                this.active_el = -1;
                console.log(this.active_el);
            } else {
                this.active_el = el;
                this.newComment.text = "";
                console.log(this.active_el);
            }
        },

        /* 로그아웃 */
        logOut: function () {
            this.isLogged = "";
            this.myID = "";
            this.myNickname = "";
            this.myPw = "";
            this.sessions = [];
            setTimeout(function () {
                location.reload();
            }, 100);
        },

        /* 사이드메뉴 활성/비활성화 */
        sideMenu: function (status) {
            if (status == 'open') {
                this.sideMenuActive = true;
            } else {
                this.sideMenuActive = false;
            }
        },

        /* 테마 변경하기 */
        changeTheme: function (color) {
            this.sideMenuActive = false;
            $('.my-list__wrap').css('background-color', color);
        },

        /* 메모 리스트 새로고침 */
        pageRefresh: function () {
            $('.my-list__li').removeAttr('style').removeClass('list-animation');
            $('.my-list__wrap').scrollTop(0);
            this.active_el = -1;
            myList.getTestList();
        }
    }
});