<template lang="pug">
#app
  TutorialHeader
  CvContent(id='#main-content'): RouterView
</template>

<script>
import TutorialHeader from './components/TutorialHeader';

export default {
  name: 'App',
  components: { TutorialHeader }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
