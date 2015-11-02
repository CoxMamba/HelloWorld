

new Vue({
    el:'#app3',
    data:{
        message:'Hello Vue.js!'
    },
    methods: {
        MyButton: function () {
                if("Hello Vue.js!" === this.message){
                    this.message = this.message.replace('Hello Vue.js!', '刘旭');
                }
                 else{
                    this.message = this.message.replace('刘旭' , 'Hello Vue.js!')
                }



        }
    }
})


