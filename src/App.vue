<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<style lang="scss">
@import './styles/carbon';
</style>

<script>
import { Notification20, UserAvatar20, AppSwitcher20 } from '@carbon/icons-vue';

export default {
  name: 'TutorialHeader',
  components: { Notification20, UserAvatar20, AppSwitcher20 }
};
</script>