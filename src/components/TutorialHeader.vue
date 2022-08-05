<template>
  <CvHeader aria-label="Carbon tutorial">
    <CvSkipToContent href="#main-content">Skip to content!</CvSkipToContent>

    <CvHeaderName to="/" prefix="IBM">Carbon Tutorial</CvHeaderName>

    <CvHeaderNav>
      <CvHeaderMenuItem to="/repos">Repositories</CvHeaderMenuItem>
    </CvHeaderNav>

    <template slot="header-global">
      <CvHeaderGlobalAction aria-label="Notifications">
        <notification-20 />
      </CvHeaderGlobalAction>
      <CvHeaderGlobalAction aria-label="User Avatar">
        <user-avatar-20 />
      </CvHeaderGlobalAction>
      <CvHeaderGlobalAction aria-label="App switcher">
        <app-switcher-20 />
      </CvHeaderGlobalAction>
    </template>
  </CvHeader>
</template>

<script>
import { Notification20, UserAvatar20, AppSwitcher20 } from '@carbon/icons-vue';

export default {
  name: 'TutorialHeader',
  components: { Notification20, UserAvatar20, AppSwitcher20 }
};
</script>
