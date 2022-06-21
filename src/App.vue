<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view />
      <CvButton>Button</CvButton>
    </cv-content>
  </div>
</template>

<script>
import TutorialHeader from './components/TutorialHeader';

export default {
  name: 'App',
  components: {
    TutorialHeader
  }
};
</script>
<style>
/* Testing to overwrite css */
/* .bx--content button {
  background-color: brown !important;
} */
</style>
