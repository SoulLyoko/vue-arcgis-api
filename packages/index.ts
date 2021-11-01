import { App, install } from "vue-demi";
import * as components from "./components";
export * from "./components";

export default {
  install: (app: App): void => {
    install();
    Object.values(components).forEach(component => {
      app.component(component.name, component);
    });
  }
};
