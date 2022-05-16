import Vue from 'vue';
import App from './App.vue';
import router from './router';
<<<<<<< HEAD

import CarbonComponentsVue from '@carbon/vue';
import { createProvider } from './vue-apollo';
=======
import CarbonComponentsVue from '@carbon/vue';
>>>>>>> 924f01afd7533cd0136b97ad7175d5c72e258701
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
