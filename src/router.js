import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/repos',
      name: 'repos',
      component: () => import('./views/RepoPage')
    }
  ]
});
