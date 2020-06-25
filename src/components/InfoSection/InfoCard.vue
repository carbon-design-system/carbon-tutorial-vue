<template>
  <article
    class="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1"
  >
    <h4 class="info-card__heading">{{ heading }}</h4>
    <p class="info-card__body">{{ body }}</p>
    <component :is="icon" />
  </article>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    heading: String,
    body: String,
    icon: Object
  }
};
</script>
