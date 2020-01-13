<template>
    <div class="reg">
        <q-nav title="注册"/>
        <div class="reg__inputbox">
            <input type="text" placeholder="请输入邮箱" class="inputbox__top">
            <input type="password" placeholder="8~16位字母数字组合密码" class="inputbox__bottom">
        </div>
        <input type="button" value="下一步" class="reg__log">
    </div>
</template>

<script>

    import Qnav from '../components/q-nav/q-nav.vue'

    export default {
        data(){return {}},
        components:{
            'q-nav':Qnav
        },
        mounted(){},
        updated(){},
        methods:{}
    }
</script>

<style scoped>
    .reg{text-align: center}
    .reg__inputbox{margin:.5rem;}
    .reg__inputbox input{
        border:.01rem solid #999;padding:.1rem;padding-left:.8rem;font-size: .3rem;border-radius: .1rem;
        height:.8rem;
    }
    .inputbox__top{
        background: url(https://static.ws.126.net/f2e/wap/touch_index_2016/trunk/images/login_bg.png)no-repeat .15rem .2rem;
        margin:.5rem 0;background-size: 0.44rem;
    }
    .inputbox__bottom{
        background: url(https://static.ws.126.net/f2e/wap/touch_index_2016/trunk/images/login_bg.png)no-repeat .15rem -.6rem;
        background-size: 0.44rem;
    }
    .reg__log{
        height:.68rem;background:#ff3333;width:4.76rem;border-radius: .15rem;color:#fff;font-size: .3rem;
    }
    .reg__btn{margin-top:.3rem;}
    .reg__btn__left{float: left;margin-left:.9rem;}
    .reg__btn__right{float: right;margin-right: .9rem;}
</style>
 