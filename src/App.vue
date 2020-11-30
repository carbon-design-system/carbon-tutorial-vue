

<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <cv-button>Button</cv-button>
    </cv-content>
  </div>
</template>

<script>
import TutorialHeader from './components/TutorialHeader.vue';
export default {
  name: 'App',
  components: {
    TutorialHeader
  }
};
</script>