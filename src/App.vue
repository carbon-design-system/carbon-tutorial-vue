<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<script>
import TutorialHeader from "./components/TutorialHeader";
import { CvButton } from '@carbon/vue';

export default {
  name: "App",
  components: {
    CvButton,
    TutorialHeader
  }
};
// import { CvButton } from '@carbon/vue';
// export default {
//   components: {
//     CvButton,
//   }
// };
</script>

<style lang="scss">
@import "./styles/carbon";
</style>
