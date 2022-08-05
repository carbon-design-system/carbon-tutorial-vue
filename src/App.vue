<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<style lang="scss">
@import './styles/carbon.scss';
</style>

<script>
import TutorialHeader from './components/TutorialHeader.vue';

export default {
  name: 'App',
  components: {
    TutorialHeader
  }
};
</script>
