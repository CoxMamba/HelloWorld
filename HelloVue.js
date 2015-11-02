

new Vue({
    el:'#app3',
    data:{
        message:'Hello Vue.js!'
    },
    methods: {
        MyButton: function () {

                this.message = this.message.replace('Hello Vue.js!', '刘旭');


        }
    }
})


