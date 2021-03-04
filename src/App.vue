<template>
  <div id="app">
<<<<<<< HEAD
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
=======
    <TutorialHeader />
    <cv-content id="#main-content">
      <router-view />
    </cv-content> 
>>>>>>> d3e50f541665874bb4d8b1f6c546372115999d17
  </div>
</template>

<script>
<<<<<<< HEAD
import TutorialHeader from './components/TutorialHeader';
export default {
  name: 'App',
  components: {
    TutorialHeader
  }
};
</script>
=======
import {CvButton} from '@carbon/vue';
import TutorialHeader from './components/TutorialHeader/TutorialHeader';
export default {
  components:{
    TutorialHeader,
    }
};
</script>

>>>>>>> d3e50f541665874bb4d8b1f6c546372115999d17
<style lang="scss">
@import './styles/carbon';
</style>
