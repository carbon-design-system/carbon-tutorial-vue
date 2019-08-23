<template>
  <div class="bx--grid bx--grid--full-width landing-page">
    <!--Banner with breadcrumb-->
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
    <!--Content-->
    <div class="bx--row landing-page__r2">
      <div class="bx--col-md-4 bx--col-lg-7">7/16</div>
      <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">8/16</div>
    </div>
    <div class="bx--row landing-page__r2">
      <div class="bx--col bx--no-gutter">
        <cv-tabs selected="0" aria-label="Tab navigation">
          <cv-tab label="About">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-md-4 bx--col-lg-7">7/16</div>
                <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">8/16</div>
              </div>
            </div>
          </cv-tab>
          <cv-tab label="Design">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-lg-16">
                  Rapidly build beautiful and accessible experiences. The Carbon kit
                  contains all resources you need to get started.
                </div>
              </div>
            </div>
          </cv-tab>
          <cv-tab label="Develop">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-lg-16">
                  Carbon provides styles and components in Vanilla, Vue, Angular,
                  and Vue for anyone building on the web.
                </div>
              </div>
            </div>
          </cv-tab>
        </cv-tabs>
      </div>
    </div>

    <!--Footer-->
    <div class="bx--row landing-page__r3">
      <div class="bx--col-md-4 bx--col-lg-4">1/4</div>
      <div class="bx--col-md-4 bx--col-lg-4">1/4</div>
      <div class="bx--col-md-4 bx--col-lg-4">1/4</div>
      <div class="bx--col-md-4 bx--col-lg-4">1/4</div>
    </div>
  </div>
</template>
