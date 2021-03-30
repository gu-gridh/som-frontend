import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
      component: () =>
        import(/* webpackChunkName: "type" */ "./views/Type.vue"),
    },
    {
      path: "/morpheme/:morpheme",
      name: "morpheme",
      props: true,
      component: () =>
        import(/* webpackChunkName: "morpheme" */ "./views/Morpheme.vue"),
    },
    {
      path: "/token/:tokenId",
      name: "token",
      props: true,
      component: () =>
        import(/* webpackChunkName: "token" */ "./views/Token.vue"),
    },
  ],
});
