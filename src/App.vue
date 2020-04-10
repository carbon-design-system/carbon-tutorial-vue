<template>
  <div id="app">
    <tutorial-header />
    Hello Carbon! Well, not quite yet. This is the starting point for the Carbon
    tutorial.
    <cv-content id="main-content">
      <router-view/>
    </cv-content>
  </div>
</template>

<style lang="scss">
@import './styles/carbon';
</style>

<script>
import { CvButton } from '@carbon/vue';
import TutorialHeader from './components/TutorialHeader';

export default {
  name: 'App',
  components: {
    CvButton, TutorialHeader
  }
};
</script>
