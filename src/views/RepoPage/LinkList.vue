<template>
  <ul class="link-list">
    <li>
      <CvLink :href="url">GitHub</CvLink>
    </li>
    <li v-if="homepageUrl">
      <span>&nbsp;|&nbsp;</span>
      <CvLink :href="homepageUrl">Homepage</CvLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LinkList',
  props: {
    url: String,
    homepageUrl: String
  }
};
</script>

<style lang="scss">
.link-list {
  display: flex;
}
</style>
