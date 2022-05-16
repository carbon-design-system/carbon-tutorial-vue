<template>
  <cv-header aria-label="Carbon tutorial">
    <cv-skip-to-content href="#main-content"
      >Skip to content</cv-skip-to-content
    >

    <cv-header-name to="/" prefix="IBM">Carbon Tutorial</cv-header-name>

    <cv-header-nav>
      <cv-header-menu-item to="/repos">Repositories</cv-header-menu-item>
    </cv-header-nav>

    <template slot="header-global">
      <cv-header-global-action aria-label="Notifications">
        <notification-20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="User avatar">
        <user-avatar-20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="App switcher">
        <app-switcher-20 />
      </cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
<<<<<<< HEAD
import { Notification20, UserAvatar20, AppSwitcher20 } from '@carbon/icons-vue';
=======
import Notification20 from '@carbon/icons-vue/es/notification/20';
import UserAvatar20 from '@carbon/icons-vue/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-vue/es/app-switcher/20';
>>>>>>> 924f01afd7533cd0136b97ad7175d5c72e258701

export default {
  name: 'TutorialHeader',
  components: { Notification20, UserAvatar20, AppSwitcher20 }
};
</script>
