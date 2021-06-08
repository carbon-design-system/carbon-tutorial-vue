<template>
  <div id="app">
    <tutorial-header />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<script>
import TutorialHeader from './components/TutorialHeader';

import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone'
})

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
