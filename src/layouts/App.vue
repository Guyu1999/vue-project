<template>
  <div id="app">
    <!-- <Loading /> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  import Loading from '@/components/loading.vue';
  import Home from '../pages/home.vue';
  import Footer from '@/layouts/footer.vue';

  export default{
    components:{
      Home,Footer,Loading
    }
  }
</script>

<style>

</style>
