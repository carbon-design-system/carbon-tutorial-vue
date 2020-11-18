<template>
    <ul class="link-list">
  <li>
    <cv-link :href="url">GitHub</cv-link>
  </li>

  <li v-if="homepageUrl">
    <span>&nbsp;|&nbsp;</span>
    <cv-link :href="homepageUrl">Homepage</cv-link>
  </li>
</ul>
</template>

<style>
    .link-list {
  display: flex;
}
</style>

<script>
import LinkList from './LinkList';
export default {
  name: 'LinkList',
  props: {
    url: String,
    homepageUrl: String,
  },
};
</script>