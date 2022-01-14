<template>
  <div
    class="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1"
  >
    <h4 class="info-card__heading">
      {{ splitHeading[0] }}
      <strong>{{ splitHeading[1] }}</strong>
    </h4>
    <p class="info-card__body">{{ body }}</p>
    <component :is="icon" />
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    heading: String,
    body: String,
    icon: Object
  },
  computed: {
    splitHeading() {
      const splitHeading = this.heading.split(' ');
      const finalWord = splitHeading.pop();
      return [splitHeading.join(' '), finalWord];
    }
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

  @include carbon--breakpoint-down(md) {
    &:not(:nth-child(2)) {
      border-top: 1px solid $ui-03;
      padding-top: $spacing-09;
    }
  }

  @include carbon--breakpoint(md) {
    &:nth-child(odd) {
      border-left: 1px solid $ui-03;
    }
  }

  @include carbon--breakpoint(lg) {
    margin-top: 0;
    border-left: 1px solid $ui-03;

    svg {
      margin-top: $layout-06;
    }
  }
}

.info-card__heading {
  @include carbon--type-style('productive-heading-03');
}

.info-card__body {
  margin-top: $spacing-06;
  flex-grow: 1;
  @include type-style('body-long-01');

  @include carbon--breakpoint-between(321px, md) {
    max-width: 75%;
  }
}
</style>
