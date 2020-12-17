<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<style lang="scss">
@import './style/carbon';
</style>

<script>
import { CvButton } from '@carbon/vue';
import TutorialHeader from './components/TutorialHeader';
export default {
  components: {
    CvButton,
  },
  name: 'App',
  components: {
    TutorialHeader,
  },
};
</script>
