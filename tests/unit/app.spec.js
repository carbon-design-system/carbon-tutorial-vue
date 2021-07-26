<<<<<<< HEAD
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  it('should load app with dummy content', () => {
    const wrapper = shallowMount(App);
    const app = wrapper.find('#app');
    expect(app).not.toBeNull;
=======
import { RouterLinkStub, shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';
import RouterViewStub from '../stubs/router-view-stub.vue';

describe('Vue Step 1 Tests', () => {
  it('Renders without crashing', () => {
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub,
        'router-view': RouterViewStub
      }
    });
  });

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
>>>>>>> 5a390e60368cc5d4da50b9a7373a47ab151d57b9
  });
});
