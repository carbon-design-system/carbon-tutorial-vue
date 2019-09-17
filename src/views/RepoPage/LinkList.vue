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

<script>
export default {
  name: 'LinkList',
  components: {},

  props: {
    url: String,
    homepageUrl: String
  }
};
</script>

<style lang="scss" scoped>
.link-list {
  display: flex;
}
</style>
