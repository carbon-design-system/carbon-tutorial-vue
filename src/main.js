import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CarbonComponentsVue from '@carbon/vue';
Vue.config.productionTip = false;

Vue.use(CarbonComponentsVue);

import { createProvider } from './vue-apollo';

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
