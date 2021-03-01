import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  const dummyContent = 'dummy content';

  it('should load app with dummy content', () => {
    const wrapper = shallowMount(App, {
      slots: { default: dummyContent }
    });
    const app = wrapper.find('#app');
    expect(app).not.toBeNull;
  });
});

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
