import { provide, inject, InjectionKey, ShallowRef } from "vue-demi";
import { MapEmitter, MapInstance, ViewInstance } from "../types";

/** RootInject */
export interface RootInject {
  map?: MapInstance;
  view?: ViewInstance;
  mapResolver: () => Promise<MapInstance>;
  viewResolver: () => Promise<ViewInstance>;
  emitter: MapEmitter;
}
export const rootInjectKey: InjectionKey<RootInject> = Symbol();
export const provideRoot = (root: RootInject) => provide(rootInjectKey, root);
export const injectRoot = () => inject(rootInjectKey)!;

/** GraphicsLayerInject */
export type GraphicsLayerInject = ShallowRef<__esri.GraphicsLayer | undefined>;
export const graphicsLayerInjectKey: InjectionKey<GraphicsLayerInject> = Symbol();
export const provideGraphicsLayer = (layer: GraphicsLayerInject) => provide(graphicsLayerInjectKey, layer);
export const injectGraphicsLayer = () => inject(graphicsLayerInjectKey)!;
