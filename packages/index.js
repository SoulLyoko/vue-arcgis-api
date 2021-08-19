import EMap from "./base/map";
import EMapView from "./views/map-view";
import ESceneView from "./views/scene-view";
import ETileLayer from "./layers/tile-layer";
import EMapImageLayer from "./layers/map-image-layer";
import EFeatureLayer from "./layers/feature-layer";
import EWidget from "./widget";

const components = [EMap, EMapView, ESceneView, ETileLayer, EMapImageLayer, EFeatureLayer, EWidget];

export { EMap, EMapView, ESceneView, ETileLayer, EMapImageLayer, EFeatureLayer, EWidget };

const install = function (Vue) {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default { install };
