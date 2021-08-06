import EMap from "./base/map";
import EMapView from "./views/map-view";
import ETileLayer from "./layers/tile-layer";
import EMapImageLayer from "./layers/map-image-layer";

const components = [EMap, EMapView, ETileLayer, EMapImageLayer];

const install = function (Vue, options = {}) {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default { install };

export { EMap, EMapView, ETileLayer, EMapImageLayer };
