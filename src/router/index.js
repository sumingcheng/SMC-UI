import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/component/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/index')
      }
    ]
  },
  {
    path: '/menu',
    name: 'menu',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/pages/menu')
      }
    ]
  },
  {
    path: '/increment',
    name: 'increment',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/pages/increment')
      }
    ]
  },
  {
    path: '/other',
    name: 'other',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/pages/other')
      }
    ]
  },
  {
    path: '/toUpdate',
    name: 'toUpdate',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/pages/toUpdate')
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});


const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

export default router;
