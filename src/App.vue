<template>
  <div id="app">
    <TutorialHeader />
    <CvCcontent id="#main-content">
      <router-view />
    </CvCcontent>
    <CvButton>
      Button
    </CvButton>
  </div>
</template>

<script>
import { CvButton } from '@carbon/vue'
import TutorialHeader from '@/components/TutorialHeader'

export default {
  components: {
    CvButton,
    TutorialHeader,
  },
}
</script>

<style lang="scss">
@import './styles/carbon'
</style>
