<template>
  <CvHeader aria-label="Carbon tutorial">
    <CvSkipToContent href="#main-content">
      Skip to content
    </CvSkipToContent>
    <CvHeaderName to="/" prefix="IBM">
      Carbon Tutorial
    </CvHeaderName>
    <CvHeaderNav>
      <CvHeaderMenuItem to="/repos">Repositories</CvHeaderMenuItem>
    </CvHeaderNav>
    <template slot="header-global">
      <CvHeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </CvHeaderGlobalAction>
      <CvHeaderGlobalAction aria-label="User avatar">
        <UserAvatar20 />
      </CvHeaderGlobalAction>
      <CvHeaderGlobalAction aria-label="App switcher">
        <AppSwitcher20 />
      </CvHeaderGlobalAction>
    </template>
  </CvHeader>
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
