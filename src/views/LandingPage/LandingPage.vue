<template>
  <div class="bx--grid bx--grid--full-width landing-page">
    <div class="bx--row landing-page__banner">
      <div class="bx--col-lg-16">
        <cv-breadcrumb noTrailingSlash aria-label="Page navigation">
          <cv-breadcrumb-item>
            <cv-link href="/">Getting started</cv-link>
          </cv-breadcrumb-item>
        </cv-breadcrumb>
        <h1 class="landing-page__heading">Design &amp; build with Carbon</h1>
      </div>
    </div>

    <div class="bx--row landing-page__r2">
      <div class="bx--col bx--no-gutter">
        <cv-tabs selected="0" aria-label="Tabs navigation">
          <cv-tab label="About">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-md-4 bx--col-lg-7">
                  <h2 class="landing-page__subheading">What is Carbon?</h2>
                  <p class="landing-page__p">
                    Carbon is IBM’s open-source design system for digital
                    products and experiences. With the IBM Design Language as
                    its foundation, the system consists of working code, design
                    tools and resources, human interface guidelines, and a
                    vibrant community of contributors.
                  </p>
                  <cv-button>Learn more</cv-button>
                </div>
                <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                  <img
                    class="landing-page__illo"
                    src="../../assets/tab-illo.png"
                    alt="Carbon illustration"
                  />
                </div>
              </div>
            </div>
          </cv-tab>
          <cv-tab label="Design">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-lg-16">
                  Rapidly build beautiful and accessible experiences. The Carbon
                  kit contains all resources you need to get started.
                </div>
              </div>
            </div>
          </cv-tab>
          <cv-tab label="Develop">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-lg-16">
                  Carbon provides styles and components in Vanilla, Vue,
                  Angular, and Vue for anyone building on the web.
                </div>
              </div>
            </div>
          </cv-tab>
        </cv-tabs>
      </div>
    </div>

    <info-section heading="The Principles" class="landing-page__r3">
      <info-card
        heading="Carbon is Open"
        body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
        :icon="PersonFavorite32"
      />
      <info-card
        heading="Carbon is Modular"
        body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
        :icon="Application32"
      />
      <info-card
        heading="Carbon is Consistent"
        body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
        :icon="Globe32"
      />
    </info-section>
  </div>
</template>

<script>
import { InfoSection, InfoCard } from '../../components/InfoSection';
import Globe32 from '@carbon/icons-vue/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-vue/lib/person--favorite/32';
import Application32 from '@carbon/icons-vue/lib/application/32';

export default {
  name: 'LandingPage',
  components: { InfoSection, InfoCard },
  created() {
    // Add icons to this
    Object.assign(this, {
      Globe32,
      PersonFavorite32,
      Application32
    });
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';
@import './carbon-overrides';
@import './mixins';

.landing-page__illo {
  max-width: 100%;
}

.landing-page__banner {
  padding-top: $spacing-05;
  padding-bottom: $spacing-07 * 4;
  @include landing-page-background;
}

.landing-page__heading {
  @include carbon--type-style('productive-heading-05');
}

.landing-page__r2 {
  margin-top: rem(-40px);
}

.landing-page__tab-content {
  padding-top: $layout-05;
  padding-bottom: $layout-05;
}

.landing-page__subheading {
  @include carbon--type-style('productive-heading-03');
  @include carbon--font-weight('semibold');
}

.landing-page__p {
  @include carbon--type-style('productive-heading-03');
  margin-top: $spacing-06;
  margin-bottom: $spacing-08;

  @include carbon--breakpoint-between((320px + 1), md) {
    max-width: 75%;
  }
}

.landing-page__r3 {
  padding-top: $spacing-09;
  padding-bottom: $spacing-09;
  @include landing-page-background;
}

.landing-page__label {
  @include carbon--type-style('heading-01');
}
</style>
