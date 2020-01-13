<template>
    <div class="detail">
        <q-nav title="新闻"/>
        <div class="detail__info">
            <h2>中方是否因美伊局势往中东增派安保人员？耿爽回应</h2>
            <p class="info__time">2020-01-06 <span>16:25</span></p>
            <div class="info__txtbox">
                <span class="txtbox__txt">
                    北京时间1月6日0时1分，2019-2020赛季足总杯第三轮一场重头戏打响，
                    利物浦坐镇安菲尔德球场对阵同城死敌埃弗顿，上演默西赛德郡德比战。
                    上半场比赛，南野拓实首发上演首秀，米尔纳开场伤退，阿德里安屡次化险为夷，
                    下半场比赛，第70分钟，18岁的小将琼斯一脚吊射打破场上僵局。
                    最终利物浦以1-0的比分战胜埃弗顿淘汰对手晋级。
                </span>
                <img src="/images/score.png" alt="" class="txtbox__img">
            </div>
        </div>
    </div>
</template>

<script>
import Qnav from '../components/q-nav/q-nav.vue';

    export default {
        data(){return {}},
        components:{
            'q-nav' : Qnav
        },
        mounted(){},
        updated(){},
        methods:{}
    }
</script>

<style scoped>
    .detail{}
    .detail__info{padding: .2rem;margin-top: .2rem;}
    .info__time{margin-top:.2rem;color:#666;}
    .txtbox__txt{
        font-size: .3rem;display: block;text-indent: .6rem;margin-top:.5rem;
        line-height: .55rem;
    }
    .txtbox__img{width:5.88rem;height:3.5rem;}
</style>
 