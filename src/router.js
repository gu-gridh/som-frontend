import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/type/:typeId",
      name: "type",
      props: true,
      component: () => import("./views/Type.vue"),
    },
    {
      path: "/morpheme/:morpheme",
      name: "morpheme",
      props: true,
      component: () => import("./views/Morpheme.vue"),
    },
    {
      path: "/token/:tokenId",
      name: "token",
      props: true,
      component: () => import("./views/Token.vue"),
    },
  ],
});
