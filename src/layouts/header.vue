<template>
    <div class="nav">
        <ul>
            <router-link tag="li" active-class="active" to="/home"><a href="#">首页</a></router-link>
            <router-link tag="li" active-class="active" to="/follow"><a href="#">推荐</a></router-link>
            <router-link tag="li" active-class="active" to="/column"><a href="#">原创</a></router-link>
            <!-- <li class="active"><a href="#">首页</a></li>
            <li><a href="#">推荐</a></li>
            <li><a href="#">原创</a></li> -->
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
    .nav{
        border-bottom: 0.01rem solid #eeeeee;background:#fff;
        width: 100%;position: fixed;top: 0;left:0;z-index: 2;height:0.78rem;
    }
    .nav ul{display: flex;padding: 0 0.09rem;}
    .nav ul li{
        flex: 1;font:0.28rem/0.78rem "";float:left;text-align: center;
    }
    .nav ul li.active a{
        color:#f00;border-bottom: 0.03rem solid #f00;padding-bottom: 0.21rem
    }
</style>
 