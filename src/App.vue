<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <cv-button>Button</cv-button>
    </cv-content>
  </div>
</template>

<style lang="scss">
@import "./styles/carbon";
</style>

<script>
import TutorialHeader from "./components/TutorialHeader";

export default {
  name: "App",
  components: {
    TutorialHeader,
  },
};
</script>
