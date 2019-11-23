<template>
  <div id="app">
    Hello Carbon! Well, not quite yet. This is the starting point for the Carbon
    tutorial.
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<style lang="scss">
@import './styles/carbon';
</style>

<script>
import TutorialHeader from './components/TutorialHeader';
export default {
  name: 'App',
  components: {
    TutorialHeader
  }
};
</script>