import Vue from "vue";
import App from "./App.vue";
import VueArcgis from "../packages";

Vue.config.productionTip = false;

Vue.use(VueArcgis);

new Vue({
  render: h => h(App)
}).$mount("#app");
