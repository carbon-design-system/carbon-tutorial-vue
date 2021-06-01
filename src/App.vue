<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<script>
import { CvContent } from '@carbon/vue';
import TutorialHeader from './components/TutorialHeader';

export default {
  name: 'App',
  components: {
    CvContent,
    TutorialHeader
  }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
