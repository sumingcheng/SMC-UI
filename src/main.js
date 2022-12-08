import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@vant/touch-emulator';
// 全局样式
import '@/assets/reset.scss';
import '@/assets/index.scss';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');



