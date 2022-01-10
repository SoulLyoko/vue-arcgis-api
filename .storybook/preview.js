import { app } from "@storybook/vue3";
import VueArcgisApi from "../packages";
import "@arcgis/core/assets/esri/themes/light/main.css";
import "./main.css";

app.use(VueArcgisApi);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  story => {
    return {
      template: `<div class="map-container"><story /></div>`
    };
  }
];
