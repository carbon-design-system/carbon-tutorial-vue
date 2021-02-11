import Vue from 'vue';
import VueCarbonComponents from '@carbon/vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueCarbonComponents);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
