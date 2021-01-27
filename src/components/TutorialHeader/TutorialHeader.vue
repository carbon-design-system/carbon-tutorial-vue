<template>
  <cv-header aria-label="Carbon header">
    <cv-header-menu-button aria-label="Header menu" aria-controls="side-nav" />
    
    <cv-skip-to-content href="#main-content">
      Skip to content
    </cv-skip-to-content>
    
    <cv-header-name to="/" prefix="IBM">
      Carbon Tutorial
    </cv-header-name>

    <cv-header-nav aria-label="Carbon nav">
      <cv-header-menu-item to="/repos">Repositories</cv-header-menu-item>
      <cv-header-menu-item to="/about">About</cv-header-menu-item>
    </cv-header-nav>

    <template v-slot:header-global>
      <cv-header-global-action
        aria-label="Notifications"
        aria-controls="notifications-panel"
      >
        <Notification20 />
      </cv-header-global-action>
      <cv-header-global-action
        aria-label="User avatar"
        aria-controls="user-panel"
      >
        <Login20 />
      </cv-header-global-action>
      <cv-header-global-action
        aria-label="App switcher"
        aria-controls="switcher-panel"
      >
        <AppSwitcher20 />
      </cv-header-global-action>
    </template>

  </cv-header>
</template>

<script>
import Notification20 from '@carbon/icons-vue/es/notification/20';
import Login20 from '@carbon/icons-vue/es/login/20';
import AppSwitcher20 from '@carbon/icons-vue/es/app-switcher/20';

export default {
  name: 'TutorialHeader',
  components: { Notification20,  AppSwitcher20, Login20 }
};
</script>

<style lang="scss" scoped></style>
