import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CarbonComponentsVue from '@carbon/vue';
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

import { ApolloProvider } from 'vue-apollo';
import { createProvider } from './vue-apollo';
new Vue({
  router,
  apolloProvider: ApolloProvider,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
