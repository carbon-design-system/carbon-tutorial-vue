<template>
  <div id="app">
    <TutorialHeader />
    <cv-content id="#main-content">
      <router-view />
    </cv-content> 
  </div>
</template>

<script>
import {CvButton} from '@carbon/vue';
import TutorialHeader from './components/TutorialHeader/TutorialHeader';
export default {
  components:{
    TutorialHeader,
    }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
