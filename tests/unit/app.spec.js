import { shallowMount, mount } from '@vue/test-utils';
import LandingPage from '../../src/views/LandingPage/LandingPage.vue';

describe('Vue Step 4 Tests', () => {
  it('Renders without crashing', () => {
    const wrapper = shallowMount(LandingPage, {});
  });

  it('It has a LandingPage page with tabs, landing page content and principles on it', () => {
    const wrapper = mount(LandingPage);

    wrapper.get('.info-section__heading');
  });
});
