<template>
    <div class="follow">
        <Header />
        <router-link
         v-for="n of 2"
         :key="n"
         :to="/detail/ + n"
         >
        <Qcell/>
        </router-link>
    </div>
</template>

<script>
    import Header from '../layouts/header';
    import Qcell from '../components/q-cell.vue';

    export default {
        data(){return {}},
        components:{
            Qcell,Header
        },
        mounted(){},
        updated(){},
        methods:{}
    }
</script>

<style scoped>
    .follow{margin-top: .6rem}
</style>
 