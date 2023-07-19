import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Element from 'element-ui';
import router from "./router";
import axios from "axios";

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(ElementUI);
Vue.prototype.axios = axios;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
Vue.config.productionTip = false;
