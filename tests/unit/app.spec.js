import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  it('should load app with dummy content', () => {
    const wrapper = shallowMount(App);
    const app = wrapper.find('#app');
    expect(app).not.toBeNull;
  });
});
