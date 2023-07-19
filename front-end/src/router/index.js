import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
    },
  ],
});

export default router;
