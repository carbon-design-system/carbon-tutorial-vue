<template slot="header-global">
    <cv-header aria-label="Carbon Tutorial"> 
        <cv-skip-to-content href="#main-content">
            Skip to Content
        </cv-skip-to-content>

        <cv-header-name to="/" prefix="IBM">
            Carbon Tutorial
        </cv-header-name>

        <cv-header-nav>
            <cv-header-menu-item to="/repos">
                Repositories
            </cv-header-menu-item>
        </cv-header-nav>

        <template slot="header-global"> 
            <cv-header-global-action aria-label="Notifications"> 
                <notification-20 />
            </cv-header-global-action>
            <cv-header-global-action aria-label="User Avatar">
                <user-avatar-20 />
            </cv-header-global-action>
            <cv-header-global-action aria-label="App Switcher">
                <app-switcher-20 />
            </cv-header-global-action>
        </template>

    </cv-header>
</template>

<script>
import {Notification20, UserAvatar20, AppSwitcher20 } from "@carbon/icons-vue";

export default {
    name: "TutorialHeader",
    components: {
        Notification20,
        UserAvatar20,
        AppSwitcher20
    }
}
</script>