// @ts-nocheck
import { App } from "vue";
import defaultTheme from "vitepress/dist/client/theme-default";
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "/vue-arcgis-api/assets";
import "@arcgis/core/assets/esri/themes/light/main.css";
import components from "../components";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(components);
  }
};
