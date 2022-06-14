import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { createProvider } from 'vue-apollo';

new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');

import CarbonComponentsVue from '@carbon/vue';
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
