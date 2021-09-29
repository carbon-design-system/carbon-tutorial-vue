import Vue from 'vue';
import App from './App.vue';
import router from './router';
<<<<<<< HEAD

import CarbonComponentsVue from '@carbon/vue';
import { createProvider } from './vue-apollo';
=======
import CarbonComponentsVue from '@carbon/vue';
import { createProvider } from './vue-apollo'
>>>>>>> c1001190dd4817bd65f746f7ccc325af6fa3c589
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
