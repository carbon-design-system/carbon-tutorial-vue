import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;

import CarbonComponentsVue from '@carbon/vue';
Vue.use(CarbonComponentsVue);
Vue.use(VueAxios, axios);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
