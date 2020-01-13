<template>
    <div class="q-cell">
        <h2><span v-show="index">1.</span>xx</h2>
        <p>今天你好好吃饭了吗</p>
    </div>
</template>

<script>
    export default {
        data(){return {}},
        props:{
            index:{
                type:Boolean,
                default:true
            }
        },
        
        id:{
            type:[String,Number],
            required:true
        },
        components:{},
        mounted(){},
        updated(){},
        methods:{
            getDetail(){
                // this.$router.push('/detail/'+this.id)
            }
        },
        
    }
</script>

<style scoped>
    .q-cell{width:6.4rem;margin: 0 auto;padding:0.2rem 0.4rem;border-bottom: 0.01rem dashed #ddd;}
    .q-cell h2 {max-height:0.9rem;font-size:0.33rem;}
    .q-cell p {margin-top: 0.05rem;max-height: 1.8rem;}
</style>
 