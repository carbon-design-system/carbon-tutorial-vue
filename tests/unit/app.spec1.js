import { shallowMount as shallow } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(App);
  });

  it('contains a TutorialHeader', () => {
    const wrapper = shallow(App);
    expect(wrapper.find('TutorialHeader').length).toBe(1);
  });
});
