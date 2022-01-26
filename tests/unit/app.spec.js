import { RouterLinkStub, shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';
import RepoPage from '../../src/views/RepoPage/RepoPage.vue';
import LandingPage from '../../src/views/LandingPage/LandingPage.vue';
import RouterViewStub from '../stubs/router-view-stub.vue';

describe('Vue Step 2 Tests', () => {
  it('Renders without crashing', () => {
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub,
        'router-view': RouterViewStub
      }
    });
  });

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
  });
});
