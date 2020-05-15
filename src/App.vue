<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view/> <!-- allows you to view the different pages set up in router  -->
    </cv-content>
  </div>
</template>

<style lang="scss">
@import "./styles/carbon"
</style>

<script>
import TutorialHeader from "./components/TutorialHeader"

export default {
  name: "App",
  components: {
    TutorialHeader
  }
}
</script>