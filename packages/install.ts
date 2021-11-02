import { App } from "vue-demi";
import * as components from "./components";

export default {
  install: (app: App): void => {
    Object.values(components).forEach(component => {
      app.component(component.name, component);
    });
  }
};
