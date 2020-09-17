import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LandingPage from './views/LandingPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage,
    },
    {
      path: '/repos',
      name: 'repo-page',
      // route level code-splitting
      // this generates a separate chunk (repo-page.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "repo-page" */ './views/RepoPage')
    }
  ]
});
