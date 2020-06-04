import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import Detail from '../views/Details.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/details/:alphaCode2',
    name: 'Details',
    component: Detail,
    beforeEnter: async (to, from, next) => {
      if (store.state.countries.length === 0) {
        await store.dispatch('getCountries', to.params.alphaCode2);
      }
      next();
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
