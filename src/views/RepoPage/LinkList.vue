<ul class="link-list">
  <li>
    <cv-link :href="url">GitHub</cv-link>
  </li>

  <li v-if="homepageUrl">
    <span>&nbsp;|&nbsp;</span>
    <cv-link :href="homepageUrl">Homepage</cv-link>
  </li>
</ul>

<script></script>

<style lang="scss">
.link-list {
  display: flex;
}
</style>
