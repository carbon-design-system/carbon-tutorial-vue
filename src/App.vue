<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <cv-content id="#main-content">
        <router-view />
      </cv-content>
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
    TutorialHeader
  }
};
</script>
