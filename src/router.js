import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< HEAD
import LandingPage from './views/LandingPage';
=======
import Home from './views/Home.vue';
>>>>>>> master

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/repos',
      name: 'repo-page',
=======
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
>>>>>>> master
      // route level code-splitting
      // this generates a separate chunk (repo-page.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
<<<<<<< HEAD
        import(/* webpackChunkName: "repo-page" */ './views/RepoPage')
=======
        import(/* webpackChunkName: "about" */ './views/About.vue')
>>>>>>> master
    }
  ]
});
