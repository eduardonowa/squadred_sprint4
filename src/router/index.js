import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Error404 from "../components/Error404/Error404.vue";
import Success from "../components/containers/Tabs/Success/Success.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/Success",
    name: "Success",
    component: Success,
  },
  {
    path: "*",
    name: "Error 404",
    component: Error404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
//   next();
// });

export default router;
