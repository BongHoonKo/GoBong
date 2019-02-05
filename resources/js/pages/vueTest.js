var app = new Vue({
    el: '#app',
    data : {
        msg : "Hello GoBong"
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        msg : '이 페이지는' + new Date() + '에 로드되었습니다.',
        seen : true
    }
});

var vueList = new Vue({
    el: ".vue-list",
    data: {
        todo: [
            {text: "Vue.js 공부하기"},
            {text: "입사지원 하기"},
            {text: "지으니한테 잘하기"},
            {text: "돈 받아내기"},
            {text: "돈 모으기"}
        ]
    }
});

var vueClick = new Vue({
    el: "#app-3",
    data: {
        msg: "Vue.js를 공부중입니다."
    },
    methods: {
        reverseText: function(){
            this.msg = this.msg.split('').reverse().join('');
        }
    }
});

var vModel = new Vue({
    el: "#app-4",
    data: {
        msg: "Vue.js 공부중입니다."
    }
});

Vue.component('todo-item', {
    template: '<li>할일 항목 하나입니다.11</li>'
});

var todoItem = new Vue({
    el: "#todo-item"
});


Vue.component('todo-item-2',{
    props: ['todos'],
    template: '<li>{{todos.id}} : {{ todos.text }}</li>'
});

var todoItem2 = new Vue({
    el: "#todo-item-2",
    data: {
        todos: [
            {id: 3,text: "1"},
            {id: 2,text: "2"},
            {id: 1,text: "3"},
        ]
    }
});