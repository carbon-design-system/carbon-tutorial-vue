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
@import '../../styles/carbon-utils';

.info-card {
  margin-top: $spacing-09;
  display: flex;
  flex-direction: column;

  svg {
    margin-top: $spacing-09;
  }

  // top border in only small breakpoints to prevent overrides
  @include carbon--breakpoint-down(md) {
    &:not(:nth-child(2)) {
      border-top: 1px solid $ui-03;
      padding-top: $spacing-09;
    }
  }

  // left border in just the 2nd column items
  @include carbon--breakpoint(md) {
    &:nth-child(odd) {
      border-left: 1px solid $ui-03;
    }
  }

  // left border in all items
  @include carbon--breakpoint(lg) {
    margin-top: 0;
    border-left: 1px solid $ui-03;

    svg {
      margin-top: $layout-06;
    }
  }
}
</style>
