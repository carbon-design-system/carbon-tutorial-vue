import Vue from 'vue';
import CarbonComponentsVue from '@carbon/vue';
import { createProvider } from './vue-apollo';

import App from './App.vue';
import router from './router';

Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
