import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import App from '@/App.vue';
import RouterViewStub from '../stubs/router-view-stub.vue';

describe('App', () => {
  it('renders without crashing', () => {
    shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub,
        'router-view': RouterViewStub,
      },
    });
  });

  it('contains a TutorialHeader', () => {
    const wrapper = shallowMount(App, {
      stubs: {
        RouterLink: RouterLinkStub,
        'router-view': RouterViewStub,
      },
    });

    // console.dir(wrapper);
    console.log(wrapper.element.outerHTML);

    console.dir(wrapper.find('div').element.outerHtml);
  });
});
