import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: () =>
        import(/* webpackChunkName: "landing-page" */ './views/LandingPage')
    },
    {
      path: '/repos',
      name: 'repo-page',
      component: () =>
        import(/* webpackChunkName: "repo-page" */ './views/RepoPage')
    }
  ]
});
