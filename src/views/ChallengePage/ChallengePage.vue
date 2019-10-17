<template>
  <div class="bx--grid bx--grid--full-width challenge-page">
    <div class="bx--row challenge-page__banner">
      <div class="bx--col-lg-16">
        <cv-breadcrumb noTrailingSlash>
          <cv-breadcrumb-item>
            <cv-link to="/challenge-page">Challenge 1</cv-link>
          </cv-breadcrumb-item>
        </cv-breadcrumb>
        <h1 class="challenge-page__heading">Your First App on IBM Cloud</h1>
      </div>
    </div>

    <div class="bx--row challenge-page__r2">
      <div class="bx--col bx--no-gutter">
        <cv-tabs @tab-selected="deactivate_t">
          <cv-tab label="And... We're Live!" :selected="t1_selected" :disabled="submission_tab_disabled">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row challenge-page__tab-content">
                <div class="bx--col-md-16 bx--col-lg-16">
                  <h1 class="challenge-page_didit">Yay... You did it!</h1>
                  <!-- <img src="https://media.giphy.com/media/XreQmk7ETCak0/source.gif" alt=""> -->
                  <p class="challenge-page_didit">
                    <ThumbsUp32 aria-label="ThumbsUp Image" />
                  </p>
                  <p class="challenge-page_didit">
                    <cv-button :icon="Idea"  @click="activate_t2">
                      Give me my points
                    </cv-button>
                  </p>
                </div>
              </div>
            </div>
          </cv-tab>
          <cv-tab label="Give me my points"  :selected="t2_selected" :disabled="submission_tab_disabled">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row challenge-page__tab-content">
                <div class="bx--col-sm-16 bx--col-md-6 bx--col-lg-6 bx--offset-sm-0 bx--offset-md-5 bx--offset-lg-5 ">
                  <h1 class="">Almost there...</h1>
                  <p class="">Submit the following form and your points will magically appear</p>
                  <cv-form>
                    <cv-text-input 
                      v-model="input_email" 
                      label="IBMID" 
                      type="email"
                      :invalid-message="email_invalid"
                      placeholder="IBMID you used to sign up for the conference"> </cv-text-input>
                    <cv-checkbox 
                    label="I agree to use my email here" 
                    v-model="checkbox_value"
                    value="checkbox_value">  </cv-checkbox>
                    <cv-button @click="submit" :disabled="notReadyForSubmit">Submit</cv-button>
                  </cv-form>
                  <cv-inline-loading
                    v-if="submission_active"
                    error-text="Something went wrong"
                    loading-text="Working on it, Beep Boop!"
                    :active="submission_active"></cv-inline-loading>
                </div>
                <div class="bx--col-md-4 bx--col-lg-7">
                  <cv-toast-notification v-if="toast_visible" 
                    :title="toast_title"
                    :sub-title="toast_subtitle"
                    :caption="toast_caption"
                    @close="doClose"></cv-toast-notification>
                </div>
              </div>
            </div>
          </cv-tab>
          <cv-tab label="Where's my points" :selected="t3_selected">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row challenge-page__tab-content">
                <div class="bx--col-md-4 bx--col-lg-7">
                  <h2 class="challenge-page__subheading">You did it!!</h2>
                    <p>Your points will appear on your On24 account in the next 24 hours. You can now head back to your On24 Dashboard and attempt the other challenges to collect more points!</p>
                    <p></p>
                    <p>You can also play with the source code for this app and make it even cooler. Don't forget to send a PullRequest if you think everyone will benefit from your changes :)</p>
                    <h4>Thanks for joining us in this short jounry :D</h4>
                </div>
                
              </div>
            </div>
          </cv-tab>
        </cv-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import AddFilled16 from '@carbon/icons-vue/es/add--filled/16';
import Notification20 from '@carbon/icons-vue/es/notification/20';
import UserAvatar20 from '@carbon/icons-vue/es/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-vue/es/app-switcher/20';
import ThumbsUp32 from '@carbon/icons-vue/es/thumbs-up/32';
import Touch32 from '@carbon/icons-vue/es/touch--1/32';
import Play32 from "@carbon/icons-vue/es/play--filled--alt/32"
import moment from 'moment'
export default {
  name: 'ChallengePage',
  components: {
    Notification20,
    UserAvatar20,
    AppSwitcher20,
    ThumbsUp32,
    Touch32
  },
  data: function() {
    return {
      Idea: Play32,
      t1_selected: false,
      t2_selected: false,
      t3_selected: false,
      checkbox_value: false,
      input_email : "",
      toast_visible: false,
      toast_title: "",
      toast_subtitle: "",
      toast_caption: "",
      email_invalid: undefined,
      submission_active:false,
      submission_tab_disabled: false
    }
  },
  methods: {
      activate_t1: function() {
        this.t1_selected = true;
      },
      activate_t2: function() {
        this.t2_selected = true;
      },
      activate_t3: function() {
        this.t3_selected = true;
      },
      deactivate_t: function() {
        this.t1_selected = false
        this.t2_selected = false
        this.t3_selected = false
      },
      disable_submission_tabs: function() {
        this.submission_tab_disabled = true;
      },
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      submit: function(e) {

        e.preventDefault();

        if(this.validEmail(this.input_email)) {
          this.email_invalid=undefined;
        }else {
          this.email_invalid="Invalid Email";
          return;
        }

        this.submission_active = true;        
        var parent_obj = this;
        this.axios.post('https://digital-conference-responses-test.mybluemix.net/responses', {
          IBM_ID: this.input_email,
          APP_ID: "APPIDIDIDIDID",
          TIMESTAMP: moment().format(),
        })
        .then(function (response) {
          console.log("success");
          parent_obj.toast_visible = true;
          parent_obj.toast_title = "Success"
          parent_obj.toast_subtitle = "Your points are on their way"
          parent_obj.toast_caption = "This is the caption"
          // currentObj.output = response.data;
          parent_obj.submission_active = false;     
          parent_obj.disable_submission_tabs();   
          parent_obj.activate_t3()
        })
        .catch(function (error) {
          console.log(error);
          parent_obj.toast_visible = true;
          parent_obj.toast_title = "Oops"
          parent_obj.toast_subtitle = "There was a problem"
          parent_obj.toast_caption = error
          parent_obj.submission_active = false;     
          // currentObj.output = error;
        });
      },
      doClose : function() {
        this.toast_visible = false;
      }
  },
  computed: {
    createdAtDisplay() {
      return moment().format();
    },
    notReadyForSubmit() {
      return !this.checkbox_value
      return !(this.validEmail(this.input_email))
    }
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';
@import './carbon-overrides';
@import './mixins';

.challenge-page__banner {
  padding-top: $spacing-05;
  padding-bottom: $spacing-07 * 4;
  @include challenge-page-background;
}
.challenge-page__heading {
  @include carbon--type-style('expressive-heading-05');
}
.challenge-page__r2 {
  margin-top: rem(-40px);
}
.challenge-page__tab-content {
  padding-top: $layout-05;
  padding-bottom: $layout-05;
}

.challenge-page_didit {
  @include carbon--type-style('display-04');
  // align-items: center;
  padding-bottom: $layout-02;
  text-align: center;
}

.challenge-page__subheading {
  @include carbon--type-style('expressive-heading-03');
  @include carbon--font-weight('semibold');
}

.challenge-page__p {
  @include carbon--type-style('expressive-heading-03');
  margin-top: $spacing-06;
  margin-bottom: $spacing-08;

  @include carbon--breakpoint-between((320px + 1), md) {
    max-width: 75%;
  }
}
.challenge-page__r3 {
  padding-top: $spacing-09;
  padding-bottom: $spacing-09;
  @include challenge-page-background;
}

.challenge-page__label {
  @include carbon--type-style('heading-01');
}
</style>
