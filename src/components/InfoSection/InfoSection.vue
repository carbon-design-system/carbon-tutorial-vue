<template>
  <section class="cds--row info-section">
    <div class="cds--col-md-8 cds--col-lg-4 cds--col-xlg-3">
      <h3 class="info-section__heading">{{ heading }}</h3>
    </div>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'InfoSection',
  props: {
    heading: String
  }
};
</script>

<style lang="scss">
@import '../../styles/_carbon-utils';

.info-section__heading {
  @include type-style('heading-01');
}
</style>
