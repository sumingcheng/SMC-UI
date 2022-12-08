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
// 引入全局工具类
import * as utils from '@/tools/Tool';

Vue.prototype.$utils = utils;

// 注册过滤器
import * as filters from '@/filters';

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');



