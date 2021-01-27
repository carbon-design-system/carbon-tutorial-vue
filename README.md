# Carbon Design System - VUE

1. Fork → https://github.com/igorgrv/carbon-tutorial-vue

2. Clone;

3. `git remote add upstream https://github.com/carbon-design-system/carbon-tutorial-vue.git`

4. `git remote -v`

   1. Deverá retornar algo:

      ```git
      origin  [your forked repo] (fetch)
      origin  [your forked repo] (push)
      upstream    git@github.com:carbon-design-system/carbon-tutorial-vue.git (fetch)
      upstream    git@github.com:carbon-design-system/carbon-tutorial-vue.git (push)
      ```

## Getting start with Carbon

1. Rodar `yarn` dentro do projeto;

2. `yarn serve` → para subir o projeto

3. Instalar o `carbon`:

   ```bash
   yarn add carbon-components @carbon/vue @carbon/icons-vue
   ```

4. Instalar o preprocessador para o SASS

   ```bash
   yarn add node-sass sass-loader
   ```

<br>

Para evitar ter que importar o SCSS da `mode_modules` com o uso do `~`

1. Criar `.env` na raíz do projeto;

   ```json
   SASS_PATH=./node_modules
   ```

2. Criar a pasta `src/style` → adicionar o file `_carbon.scss` ;

   ```scss
   @import 'carbon-components/scss/globals/scss/styles';
   ```

3. Alterar o `style` do  `App.vue` :

   ```vue
   <style lang="scss">
   	@import "./styles/carbon";
   </style>
   ```

4. Adicionar o `CarbonComponentesVue` dentro do main:

   ```javascript
   import CarbonComponentsVue from '@carbon/vue';
   Vue.use(CarbonComponentsVue);
   ```



## Um botão do Carbon

Com o Carbon ja importado no `main` , podemos fazer uso dos componentes fornecidos!

1. Em `App.vue` importe o `CvButton`

   ```vue
   <template>
     <div id="app">
       <CvButton>Button</CvButton>
     </div>
   </template>
   
   <script>
   import { CvButton } from '@carbon/vue';
   export default {
     components: {
       CvButton
     }
   };
   </script>
   ```

   * Isso fará com que ja seja exibido o botão com o estilo padrao do Vue!

## Um Header

1. Crie `src/componentes/`

   ```
   src/components/TutorialHeader
   └──TutorialHeader.vue
   ```

2. Dentro de `TutorialHeader` iremos adicionar alguns **icones** e fazer o uso do [CvUIShell](https://vue.carbondesignsystem.com/?path=/story/components-cvuishell--header-base)

   ```vue
   <template>
     <cv-header aria-label="Carbon header">
       <cv-header-menu-button aria-label="Header menu" aria-controls="side-nav" />
       
       <cv-skip-to-content href="#main-content">
         Skip to content
       </cv-skip-to-content>
       
       <cv-header-name to="/" prefix="IBM">
         Carbon Tutorial
       </cv-header-name>
   
       <cv-header-nav aria-label="Carbon nav">
         <cv-header-menu-item to="/repos">
           Repositories
         </cv-header-menu-item>
       </cv-header-nav>
   
       <template v-slot:header-global>
         <cv-header-global-action
           aria-label="Notifications"
           aria-controls="notifications-panel"
         >
           <Notification20 />
         </cv-header-global-action>
         <cv-header-global-action
           aria-label="User avatar"
           aria-controls="user-panel"
         >
           <Login20 />
         </cv-header-global-action>
         <cv-header-global-action
           aria-label="App switcher"
           aria-controls="switcher-panel"
         >
           <AppSwitcher20 />
         </cv-header-global-action>
       </template>
   
     </cv-header>
   </template>
   
   <script>
   import Notification20 from '@carbon/icons-vue/es/notification/20';
   import Login20 from '@carbon/icons-vue/es/login/20';
   import AppSwitcher20 from '@carbon/icons-vue/es/app-switcher/20';
   
   export default {
     name: 'TutorialHeader',
     components: { Notification20,  AppSwitcher20, Login20 }
   };
   </script>
   
   <style lang="scss" scoped></style>
   ```

3. Como o Header é algo **que irá sempre aparecer na aplicação** iremos importa-lo no `app.vue`:

   1. Será necessário utilizar do `cv-content` para podermos exibir o botão

   ```vue
   <template>
     <div id="app">
       <tutorial-header />
       <cv-content id="#main-content">
         <cv-button>Button</cv-button>
       </cv-content>
     </div>
   </template>
   
   <script>
   import TutorialHeader from './components/TutorialHeader/TutorialHeader';
   
   export default {
     components: {
       TutorialHeader
     }
   };
   </script>
   ```

   

## Uma view

1. Para criar a view iremos criar os path e files:

   ```
   src/views
   ├── LandingPage
   			└── LandingPage.vue
   └── RepoPage
   			└── RepoPage.vue
   ```

   * Será somente um exemplo de como utilzar rotas com lazy loading;

2. Dentro de `routes.js` iremos importar o `LandingPage` e fazer via LazyLoading o import do `RepoPage`

   ```javascript
   import Vue from 'vue';
   import Router from 'vue-router';
   import LandingPage from './views/LandingPage/LandingPage.vue';
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
         component: () =>
           import(
             /* webpackChunkName: "repo-page" */ './views/RepoPage/RepoPage.vue'
           )
       }
     ]
   });
   ```

   * Para utilizar o `routes.js` é necessário importar dentro do `main.js`

     ```javascript
     import router from './router';
     
     new Vue({
       router,
       render: h => h(App)
     }).$mount('#app');
     ```

     