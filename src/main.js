import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CarbonComponentsVue from "@carbon/vue";

import { CarbonIconsVue } from '@carbon/icons-vue';
import Notification20 from '@carbon/icons-vue/es/notification/20';
import UserAvatar20 from '@carbon/icons-vue/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-vue/es/app-switcher/20';

Vue.use(CarbonIconsVue, {
  components: {
    Notification20, UserAvatar20, AppSwitcher20
  },
});

Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
