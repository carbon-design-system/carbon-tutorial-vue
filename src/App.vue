<template>
  <div id="app">
    <AppHeader />
    <CvContent id="#main-content">
      <router-view />
    </CvContent>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
