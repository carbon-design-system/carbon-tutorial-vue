<style lang="scss">
@import "./styles/carbon";
</style>

<script>
import TutorialHeader from "./components/TutorialHeader";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TutorialHeader
  }
};
</script>

<template>
  <div id="app">
    <tutorial-header/>
    <cv-content id="#main-content">
      <router-view/>
    </cv-content>
  </div>
</template>
