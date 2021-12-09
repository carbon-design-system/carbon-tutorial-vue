import { RouterLinkStub, shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';
<<<<<<< HEAD
import RouterViewStub from '../stubs/router-view-stub.vue';

describe('Vue Step 1 Tests', () => {
=======
import RepoPage from '../../src/views/RepoPage/RepoPage.vue';
import LandingPage from '../../src/views/LandingPage/LandingPage.vue';
import RouterViewStub from '../stubs/router-view-stub.vue';

describe('Vue Step 2 Tests', () => {
>>>>>>> 23891323332e4d95312b5ab254f1b2f110867ea3
  it('Renders without crashing', () => {
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub,
        'router-view': RouterViewStub
      }
    });
  });

<<<<<<< HEAD
  it('It has a Carbon header', () => {
    const wrapper = mount(App, {
      stubs: {
        RouterLink: RouterLinkStub,
        'router-view': RouterViewStub
      }
    });

    wrapper.get('.bx--header');
    wrapper.get('.bx--content');
    wrapper.get('.bx--skip-to-content');
    wrapper.get('.bx--header__name');
    wrapper.get('.bx--header__nav');
=======
  it('It has a LandingPage page with tabs, landing page content and principles on it', () => {
    const wrapper = mount(LandingPage);

    wrapper.get('.landing-page__r2 [role="tablist"]');
    wrapper.get('.landing-page__r2 .landing-page__tab-content');
    wrapper.get('.landing-page__r3 .landing-page__label');
  });

  it('It has a RepoPage with a table in it', () => {
    const wrapper = mount(RepoPage);

    // Has the user rendered a table
    wrapper.get('table');
>>>>>>> 23891323332e4d95312b5ab254f1b2f110867ea3
  });
});
