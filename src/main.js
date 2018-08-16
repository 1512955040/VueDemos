// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import "@/assets/common.css"
import Routes from "./routes.js"
import store from "./store/"
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueRouter);
//Vue.use(VueAxios,axios);
Vue.prototype.$http=axios;
Vue.config.productionTip = false
//创建路由
const router =new VueRouter({
	routes:Routes,
	mode:"history"
})
/* eslint-disable no-new */
new Vue({
  store,			
  router:router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
