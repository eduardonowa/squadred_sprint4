import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Basic from "../components/containers/Tabs/Basic/Basic.vue";
import Social from "../components/containers/Tabs/Social/Social.vue";
import Certificates from "../components/containers/Tabs/Certificates/Certificates.vue";
import Error404 from "../components/Error404/Error404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/Basic",
    name: "Basic",
    component: Basic,
  },
  {
    path: "/Social",
    name: "Social",
    component: Social,
  },
  {
    path: "/Certificates",
    name: "Certificates",
    component: Certificates,
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
