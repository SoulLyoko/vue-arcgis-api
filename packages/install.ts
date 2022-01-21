import { App } from "vue-demi";
import * as components from "./components";

export default {
  install: (app: App): void => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  }
};
