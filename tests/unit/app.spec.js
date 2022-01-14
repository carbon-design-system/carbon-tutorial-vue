import { RouterLinkStub, shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';
import RouterViewStub from '../stubs/router-view-stub.vue';

describe('Vue Step 1 Tests', () => {
  it('Renders without crashing', () => {
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub,
        'router-view': RouterViewStub,
      },
    });
  });

  it('It has a Carbon header', () => {
    const wrapper = mount(App, {
      stubs: {
        RouterLink: RouterLinkStub,
        'router-view': RouterViewStub,
      },
    });

    wrapper.get('.bx--header');
    wrapper.get('.bx--content');
    wrapper.get('.bx--skip-to-content');
    wrapper.get('.bx--header__name');
    wrapper.get('.bx--header__nav');
  });
});
