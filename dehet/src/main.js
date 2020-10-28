import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
// import router from "./router";
import veutify from "@/plugins/veutify";

Vue.config.productionTip = false;

new Vue({
  veutify,
  render: h => h(App)
}).$mount("#app");
