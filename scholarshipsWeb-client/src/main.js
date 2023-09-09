import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import router from './router'
import store  from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(router);
Vue.use(ElementUI,{size:"small"});
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})