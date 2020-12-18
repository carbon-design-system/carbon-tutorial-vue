<template>
  <cv-header aria-label="Carbon tutorial">
    <cv-skip-to-content href="#main-content"
      >Skip to content</cv-skip-to-content
    >

    <cv-header-name to="/" prefix="IBM">Carbon Tutorial</cv-header-name>

    <cv-header-nav aria-label="Carbon tutorial nav">
      <cv-header-menu-item to="/repos">Repositories</cv-header-menu-item>
    </cv-header-nav>

    <template slot="header-global">
      <cv-header-global-action aria-label="Notifications">
        <Notification20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="User avatar">
        <UserAvatar20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="App switcher">
        <AppSwitcher20 />
      </cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
import Notification20 from '@carbon/icons-vue/es/notification/20';
import UserAvatar20 from '@carbon/icons-vue/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-vue/es/app-switcher/20';

export default {
  name: 'TutorialHeader',
  components: { Notification20, UserAvatar20, AppSwitcher20 },
};
</script>

<style lang="scss"></style>
