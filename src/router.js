import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage';

// route level code-splitting
// this generates a separate chunk (repo-page.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const RepoPage = () => import('./views/RepoPage');

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
      component: RepoPage
    }
  ]
});
