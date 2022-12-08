import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    children: [
      {
        path: '/',
        component: () => import('@/views/index')
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
