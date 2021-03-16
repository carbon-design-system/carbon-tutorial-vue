<template>
  <section class="bx--row info-section">
    <div class="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
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
  @include carbon--type-style('heading-01');
}
</style>
