<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <cv-button>Button</cv-button>
    </cv-content>
  </div>
</template>

<script>
import { CvButton } from '@carbon/vue';
import TutorialHeader from './components/TutorialHeader';

export default {
  components: {
    CvButton,
    TutorialHeader
  }
};
</script>

<style lang="scss">
@import './styles/carbon.scss';
</style>
