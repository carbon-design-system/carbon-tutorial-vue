import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import LandingPage from './views/LandingPage';
// import RepoPage from './views/RepoPage';

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
      name: 'repo-page',
      // component: RepoPage
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/RepoPage')
    }
  ]
});
