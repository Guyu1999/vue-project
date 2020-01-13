<template>
    <div class="footer">
        <ul class="footer__ul">
            <router-link tag="li" to="/home" class="footer__index" active-class="footer__index_active"><a href="javascript:;">首页</a></router-link>
            <router-link class="footer__img"  tag="li" to="/home" active-class="footer__img_active" ><img src="@/assets/imgs/logo.png" alt=""></router-link>
            <router-link tag="li" to="/user" class="footer__my"  active-class="footer__my_active"><a href="javascript:;">我的</a></router-link>
            <!-- <li class="footer__index"><a href="#">首页</a></li>
            <li class="footer__img"><img src="@/assets/imgs/logo.png" alt=""></li>
            <li class="footer__my"><a href="#">我的</a></li> -->
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

<style>
    .footer{width:100%;height:0.74rem;background:#f00;position: fixed;bottom:0;left:0;z-index: 2;}
    .footer__ul{display: flex;justify-content: space-between;padding:0 0.4rem}
    .footer ul li{font:0.24rem/0.74rem "";}
    .footer ul li a{color:#fff;font-weight: 700;display: block;margin-top:0.2rem;}
    .footer__my{
        background:url('../assets/imgs/user.png')no-repeat 0.05rem 0.03rem;background-size: 0.4rem;
    }
    .footer__my_active{
        background:url('../assets/imgs/user.png')no-repeat -0.05rem -0.1rem;background-size: 0.6rem;
    }
    .footer__img{margin-top:0.1rem;}

    .footer__index{
        background:url('../assets/imgs/user.png')no-repeat 0.05rem 0.03rem;background-size: 0.4rem;
    }
    .footer__index_active{
        background:url('../assets/imgs/user.png')no-repeat -0.05rem -0.1rem;background-size: 0.6rem;
    }

</style>
 