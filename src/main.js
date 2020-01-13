import Vue from 'vue'
import App from '@/layouts/App.vue'

Vue.config.productionTip = false

import './assets/css/base.css';//base.css没有对外暴露等于src引入用法

import './assets/js/font.js';

import router from './plugins/router.js';

import axios from './plugins/axios.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
