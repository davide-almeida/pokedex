import { createApp } from "vue";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
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
      path: '/busca',
      component: () => import('./components/PokeSearch.vue')
    }
  ]
});

app.use(router);

app.mount("#app");
