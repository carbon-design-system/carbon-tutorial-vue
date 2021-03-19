import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CarbonComponentVue from '@carbon/vue';

Vue.config.productionTip = false;

Vue.use(CarbonComponentVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
