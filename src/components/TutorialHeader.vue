<template slot="header-global">
    <div>
<!--    <cv-header-global-action aria-label="Notifications">-->
<!--        <notification-20 />-->
<!--    </cv-header-global-action>-->
<!--    <cv-header-global-action aria-label="User avatar">-->
<!--        <user-avatar-20 />-->
<!--    </cv-header-global-action>-->
<!--    <cv-header-global-action aria-label="App switcher">-->
<!--        <app-switcher-20 />-->
<!--    </cv-header-global-action>-->
        <cv-header-name to="/" prefix="IBM">Carbon Tutorial</cv-header-name>
        <cv-header-menu-item to="/repos">Repositories</cv-header-menu-item>
    </div>
</template>
<script>
    // import { Notification20, UserAvatar20, AppSwitcher20 } from '@carbon/icons-vue';
    export default {
        name: "TutorialHeader",
        // components: { Notification20, UserAvatar20, AppSwitcher20 }
    };
</script>
