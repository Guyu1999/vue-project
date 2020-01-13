<template>
    <div class="login">
        <q-nav title="登录"/>
        <div class="login__inputbox">
            <input type="text" placeholder="请输入邮箱地址" class="inputbox__top">
            <input type="password" placeholder="请输入密码" class="inputbox__bottom">
        </div>
        <input type="button" value="登录" class="login__log">
        <div class="login__btn">
            <a href="javascript:;" class="login__btn__left">忘记密码?</a>
            <a href="./reg" class="login__btn__right">去注册</a>
        </div>
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
    .login{text-align: center}
    .login__inputbox{margin:.5rem;}
    .login__inputbox input{
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
    .login__log{
        height:.68rem;background:#ff3333;width:4.76rem;border-radius: .15rem;color:#fff;font-size: .3rem;
    }
    .login__btn{margin-top:.3rem;}
    .login__btn__left{float: left;margin-left:.9rem;}
    .login__btn__right{float: right;margin-right: .9rem;}
</style>
 