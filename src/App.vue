 <!--<template>
  <div id="app">
   Hello Carbon! Well, not quite yet. This is the starting point for the Carbon
    tutorial. 
	<CvButton>Button</CvButton>
	<cv-button>Button</cv-button>
  </div>
</template>-->

<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
    <!--  <cv-button>Button</cv-button> -->
    <router-view />
    </cv-content>
  </div>
</template>

<style lang="scss">
@import "./styles/carbon";
</style>

<!--<script>
import { CvButton } from '@carbon/vue';

export default {
  components: {
    CvButton,
  }
};
</script>-->
<script>
import TutorialHeader from "./components/TutorialHeader";

export default {
  name: "App",
  components: {
    TutorialHeader
  }
};
</script>