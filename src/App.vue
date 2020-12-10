<template>
  <div id="app">
    <tutorial-header></tutorial-header>

    <cv-content id="#main-content">
      <router-view></router-view>
    </cv-content>
  </div>
</template>

<script>
import TutorialHeader from './components/TutorialHeader';
import { CvContent } from '@carbon/vue';

export default {
  name: 'App',
  components: {
    TutorialHeader,
    CvContent
  }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
