import Vue from 'vue';

import CarbonComponentsVue from "@carbon/vue";
Vue.use(CarbonComponentsVue);

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
