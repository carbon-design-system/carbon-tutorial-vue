import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CarbonComponentsVue from '@carbon/vue';

Vue.config.productionTip = false;

Vue.use(CarbonComponentsVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
