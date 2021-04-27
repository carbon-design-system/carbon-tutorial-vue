import { RouterLinkStub, shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';
import RouterViewStub from '../stubs/router-view-stub.vue';

describe('App.vue', () => {
  it('Can see an app ok', () => {
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub,
        'router-view': RouterViewStub,
      },
    });
  });
});

describe('App.vue', () => {
  it('Can see an app ok with a real mount', () => {
    const wrapper = mount(App, {
      stubs: {
        RouterLink: RouterLinkStub,
        'router-view': RouterViewStub,
      },
    });
  });
});
