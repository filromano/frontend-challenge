import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

Vue.filter('populationThousands', (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
