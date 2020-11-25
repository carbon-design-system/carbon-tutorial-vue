<cv-content id="#main-content">
  <router-view />
</cv-content>

<style lang="scss">
	@import "./styles/carbon";
</style>

<script>
	import { CvButton } from '@carbon/vue';
	export default {
	  components: {
		CvButton,
	  }
	};
</script>

<script>
	import TutorialHeader from "./components/TutorialHeader";

	export default {
	  name: "App",
	  components: {
		TutorialHeader
	  }
	};
</script>


<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <cv-button>Button</cv-button>
    </cv-content>
  </div>
</template>