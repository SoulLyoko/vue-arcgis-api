import Vue from "vue";
import App from "./App.vue";
import VueArcgis from "../packages";
import "@arcgis/core/assets/esri/themes/light/main.css";
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "/assets";

Vue.config.productionTip = false;

Vue.use(VueArcgis);

new Vue({
  render: h => h(App)
}).$mount("#app");
