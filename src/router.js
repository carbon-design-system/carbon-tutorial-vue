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
      name: 'repo-page',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
<<<<<<< HEAD
        import(/* webpackChunkName: "about" */ './views/RepoPage')
=======
        import(/* webpackChunkName: "repo-page" */ './views/RepoPage')
>>>>>>> d3e50f541665874bb4d8b1f6c546372115999d17
    }
  ]
});
