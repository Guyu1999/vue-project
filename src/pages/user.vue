<template>
    <div class="user">
        <div class="user__mybox">
            <img src="/images/tx1.jpg" class="user__my">
            <p class="user__logbox">
                <a href="./login" class="user__login">登录</a>
                <a href="./reg" class="user__reg">注册</a>
            </p>
        </div>
        <ul class="user__api">
            <li class="user__email"><a href="#">我的邮箱</a></li>
            <li class="user__tie"><a href="#">我的跟帖</a></li>
            <li class="user__logout"><a href="#">退出登录</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){return {}},
        components:{},
        mounted(){},
        updated(){},
        methods:{}
    }
</script>

<style scoped>
    .user{}
    .user__mybox{margin-top: 1.5rem;text-align: center}
    .user__my{width:2rem;height:2rem;border-radius: 50%;margin-bottom: .3rem;}
    .user__api{margin-top:.5rem;padding:0 .5rem;}
    .user__api li{border-bottom:.01rem dashed #666;margin:.2rem 0;padding: .2rem 0;text-indent: 1rem;}
    .user__logbox a{margin:0 .05rem;}
    .user__email{
        background:url('../assets/imgs/t3.png')no-repeat;
        background-size: .6rem;
    }
    .user__tie{
        background:url('../assets/imgs/t3.png')no-repeat 0 -.8rem;
        background-size: .6rem;
    }
    .user__logout{
        background:url('../assets/imgs/t3.png')no-repeat 0 -1.6rem;
        background-size: .6rem;
    }
</style>
 