<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<script>
import TutorialHeader from './components/TutorialHeader/TutorialHeader';

export default {
  components: {
    TutorialHeader
  }
};
</script>

<style lang="scss">
@import './style/_carbon.scss';
</style>
