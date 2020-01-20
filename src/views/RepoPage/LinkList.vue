<template>
  <ul class="link-list">
    <li>
      <cv-link :href="url">GitHub</cv-link>
    </li>
<<<<<<< HEAD

=======
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
    <li v-if="homepageUrl">
      <span>&nbsp;|&nbsp;</span>
      <cv-link :href="homepageUrl">Homepage</cv-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LinkList',
<<<<<<< HEAD
=======
  components: {},

>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
  props: {
    url: String,
    homepageUrl: String
  }
};
</script>

<<<<<<< HEAD
<style lang="scss">
=======
<style lang="scss" scoped>
>>>>>>> 991663f4db563c4b3ccddc1c0b509fa8989e86d7
.link-list {
  display: flex;
}
</style>
