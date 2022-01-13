import { inject, Ref } from "vue-demi";
import { MapEmitter, MapInstance, ViewInstance } from "../types";

export function useInject() {
  const rootMap = inject<Ref<MapInstance>>("rootMap");
  const rootView = inject<Ref<ViewInstance>>("rootView");
  const mapEmitter = inject<MapEmitter>("mapEmitter");

  return { rootMap, rootView, mapEmitter };
}

export function useRootMap() {
  const { rootMap, mapEmitter } = useInject();
  const promise = new Promise<MapInstance>(resolve => {
    mapEmitter?.on("rootMapInit", resolver);

    function resolver(view: MapInstance) {
      mapEmitter?.off("rootMapInit", resolver);
      resolve(view);
    }
  });
  return rootMap?.value ?? promise;
}

export function useRootView() {
  const { rootView, mapEmitter } = useInject();
  const promise = new Promise<ViewInstance>(resolve => {
    mapEmitter?.on("rootViewInit", resolver);

    function resolver(view: ViewInstance) {
      mapEmitter?.off("rootViewInit", resolver);
      resolve(view);
    }
  });
  return rootView?.value ?? promise;
}
