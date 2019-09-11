<template>
  <div id="app">
    <TutorialHeader />
    <CvContent id="#main-content">
      <router-view />
    </CvContent>
  </div>
</template>

<script>
import TutorialHeader from '@/components/TutorialHeader';

export default {
  name: 'App',
  components: {
    TutorialHeader
  }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
