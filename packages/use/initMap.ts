import { h, onMounted, shallowReactive, provide, SetupContext } from "vue-demi";
import mitt from "mitt";
import { MapProvide, MapEmitEvents, MapConstructor, ViewInstance } from "../types";

export function useInitMap({ emit, attrs, slots, Module }: SetupContext & { Module: MapConstructor }) {
  const mapEmitter = mitt<MapEmitEvents>();
  const mapRoot = shallowReactive<MapProvide>({
    map: undefined,
    view: undefined
  });
  provide("mapEmitter", mapEmitter);
  provide("mapRoot", mapRoot);

  onMounted(() => {
    mapEmitter.on("rootViewInit", (e: ViewInstance) => {
      mapRoot.view = e;
      emit("viewInit", mapRoot.view, mapRoot.map);
    });
    mapRoot.map = new Module(attrs);
    mapEmitter.emit("rootMapInit", mapRoot.map);
    emit("init", mapRoot.map);
  });

  return () =>
    h(
      "div",
      {
        style: { width: "100%", height: "100%" }
      },
      slots.default?.()
    );
}
