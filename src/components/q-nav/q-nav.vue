<template>
    <div class="detail__nav">
        <input type="button" value="<返回" @click="goback"><span>{{title}}</span>
    </div>
</template>

<script>
    export default {
        data(){return {}},
        components:{},
        props:{
            title:{
                default:''
            }
        },
        mounted(){},
        updated(){},
        methods:{
            goback(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .detail__nav{text-align: left;height:0.84rem;background:#ff3333 url('./assets/logo1.png')no-repeat 5.4rem;background-size: .7rem;}
    .detail__nav input{color:#fff;margin:.2rem;font-size: .3rem;}
    .detail__nav span{color:#fff;padding-left:.2rem;border-left: .02rem solid #ff9999;}
</style>
 

