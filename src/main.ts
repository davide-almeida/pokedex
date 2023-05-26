import { createApp } from "vue";
import "./style.css";
import App from './App.vue';
import * as vueRouter from 'vue-router';

const app = createApp(App);

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/pokemon',
      component: () => import('./components/Pokemon.vue')
    }
  ]
});

app.use(router);

app.mount("#app");
