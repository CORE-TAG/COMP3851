import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout.vue";
import QAadA from "@/components/QAadA/index.vue"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
    },
    {
      path: "/qa",
      name: "Q&A",
      component: QAadA,
    },
  ],
});

export default router;
