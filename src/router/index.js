import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: function () {
      return import("../views/Home.vue");
    },
  },
  {
    path: "/movies",
    name: "Movies",
    component: function () {
      return import("../views/Movies.vue");
    },
  },
  {
    path: "/movie",
    name: "Movie",
    component: function () {
      return import("../views/SingleMovie.vue");
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: function () {
      return import("../views/Profile.vue");
    },
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: function () {
      return import("../views/SingleMovie.vue");
    },
  },
  {
    path: "/tv/:id",
    name: "tv",
    component: function () {
      return import("../views/SingleTv.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
