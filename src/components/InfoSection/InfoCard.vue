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
  name: "InfoCard",
  props: {
    heading: String,
    body: String,
    icon: Object
  },
  computed: {
  // Take in a phrase and separate the third word in an array
  splitHeading() {
    const splitHeading = this.heading.split(" ");
    const finalWord = splitHeading.pop();
    return [splitHeading.join(" "), finalWord];
  }
}
};
</script>

<style lang="scss">
@import "../../styles/_carbon-utils";
  .info-card__body {
    margin-top: $spacing-06;
    flex-grow: 1; // fill space so icons are bottom aligned
    @include type-style('body-long-01');
    // prevent large line lengths between small and medium viewports
    @include carbon--breakpoint-between(321px, md) {
        max-width: 75%;
    }
  }
</style>