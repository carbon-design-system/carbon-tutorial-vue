import { shallowMount as shallow } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(App);
  });
});
