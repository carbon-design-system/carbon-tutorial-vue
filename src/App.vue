<template>
  <cv-content id="#main-content">
    <router-view />
  </cv-content>
</template>

<script>
import Notification20 from '@carbon/icons-vue/es/notification/20';
import UserAvatar20 from '@carbon/icons-vue/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-vue/es/app-switcher/20';
export default {
  name: 'TutorialHeader',
  components: { Notification20, UserAvatar20, AppSwitcher20 }
};
</script>

<style lang="scss"></style>