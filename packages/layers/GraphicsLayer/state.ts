import { shallowReactive } from "vue-demi";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { provideGraphicsLayer, GraphicsLayerInject } from "../../use";
import { MapEmitEvents } from "../../types";
import mitt from "mitt";

export function useInjectState() {
  const emitter = mitt<MapEmitEvents>();

  const injectState: GraphicsLayerInject = shallowReactive({
    layer: undefined,
    layerResolver,
    emitter
  });

  provideGraphicsLayer(injectState);

  function layerResolver() {
    return new Promise<GraphicsLayer>(resolve => {
      if (injectState.layer) {
        resolve(injectState.layer);
      } else {
        const resolver = (layer: any) => {
          emitter.off("layerInit", resolver);
          resolve(layer);
        };
        emitter.on("layerInit", resolver);
      }
    });
  }

  return injectState;
}
