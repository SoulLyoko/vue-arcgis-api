import { onMounted, shallowRef, provide, SetupContext } from "vue-demi";
import mitt from "mitt";
import { h } from "../utils";
import { MapEmitEvents, MapConstructor, MapInstance, ViewInstance } from "../types";

export function useInitMap({ emit, attrs, slots, Module }: SetupContext & { Module: MapConstructor }) {
  const mapEmitter = mitt<MapEmitEvents>();
  const rootMap = shallowRef<MapInstance>();
  const rootView = shallowRef<ViewInstance>();

  provide("mapEmitter", mapEmitter);
  provide("rootMap", rootMap);
  provide("rootView", rootView);

  onMounted(() => {
    rootMap.value = new Module(attrs);
    emit("init", rootMap.value);
    mapEmitter.emit("rootMapInit", rootMap.value);
    mapEmitter.on("rootViewInit", (view: ViewInstance) => {
      rootView.value = view;
      emit("viewInit", rootView.value, rootMap.value);
    });
  });

  return () =>
    h(
      "div",
      {
        style: "width:100%;height:100%"
      },
      slots.default?.()
    );
}
