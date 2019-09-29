import Vue from 'vue';
import Router from 'vue-router';
import { LandingPage } from './views/LandingPage';
import { RepoPage } from './views/RepoPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lp',
      component: LandingPage
    },
    {
      path: '/repos',
      name: 'repositories',
      component: RepoPage
    }
  ]
});
