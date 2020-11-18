import Vue from 'vue';
import App from './App.vue';
import router from './router';

// This is a quick way to pull in all @carbon/vue components and register them for use in your project.
import CarbonComponentsVue from '@carbon/vue';
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
