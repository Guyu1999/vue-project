<template>
    <div class="home">
        <Header/>
        <Banner/>
        <router-link
         v-for="n of 4"
         :key="n"
         :to="/detail/ + n"
         >
            <q-cell/>
         </router-link>
    </div>
</template>

<script>
import Header from '../layouts/header';
import Banner from '../components/banner.vue';
import QCell from '../components/q-cell.vue';
    export default {
        data(){return {}},
        components:{
            Banner,'q-cell':QCell,Header,
        },
        mounted(){
            this.$axios({
                url:'/api/home',
                params:{_page:1,_limit:1}
            }).then(
                res=>console.log(res.data)
            )
        },
        updated(){},
        methods:{}
    }
</script>

<style>
    .home{}
</style>
 