import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/type/:typeId",
      name: "type",
      props: true,
      component: () => import(/* webpackChunkName: "type" */ "./views/Type.vue")
    },
    {
      path: "/morpheme/:morpheme",
      name: "morpheme",
      props: true,
      component: () =>
        import(/* webpackChunkName: "morpheme" */ "./views/Morpheme.vue")
    }
  ]
});
