import { shallowMount, mount } from '@vue/test-utils';
import LandingPage from '../../src/views/LandingPage/LandingPage.vue';
const fs = require('fs');

describe('Vue Step 5 Tests', () => {
  it('Renders without crashing', () => {
    const wrapper = shallowMount(LandingPage, {});
  });

  it('app contains a manifest file', async () => {
    let fileFound = false;
    try {
      fs.accessSync('manifest.yml', fs.constants.R_OK | fs.constants.W_OK);
      fileFound = true;
    } catch (err) {
      console.dir(err);
    }
    expect(fileFound).toBeTruthy();
  });
});
