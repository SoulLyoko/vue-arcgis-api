import { defineComponent, shallowReactive, h } from "vue";

export const EMap = defineDynamicComponent("EMap");
export const EWebMap = defineDynamicComponent("EWebMap");
export const EMapView = defineDynamicComponent("EMapView");
export const ESceneView = defineDynamicComponent("ESceneView");
export const EFeatureLayer = defineDynamicComponent("EFeatureLayer");
export const EMapImageLayer = defineDynamicComponent("EMapImageLayer");
export const ETileLayer = defineDynamicComponent("ETileLayer");
export const EWidget = defineDynamicComponent("EWidget");
export const EDraw = defineDynamicComponent("EDraw");

const imports = shallowReactive<Record<string, any>>({});
function dynamicImport() {
  if (!imports.default) {
    import("../../../packages").then((modules: Record<string, any>) => {
      Object.keys(modules).forEach(key => {
        imports[key] = modules[key];
      });
    });
  }
  return imports;
}

function defineDynamicComponent(name: string) {
  return defineComponent({
    name,
    setup(props, { attrs, slots }) {
      const components = dynamicImport();
      return () => {
        if (components[name]) {
          return h(components[name], attrs, slots.default);
        } else {
          return;
        }
      };
    }
  });
}
