import { h, onMounted, inject, SetupContext } from "vue-demi";
import Map from "@arcgis/core/Map";
import { MapEmitter, MapProvide, ViewConstructor } from "../types";
import { useEvents, useWatch } from "./";
import { uuid } from "../utils";

const commonEvents = [
  "blur",
  "click",
  "double-click",
  "drag",
  "focus",
  "hold",
  "immediate-click",
  "immediate-double-click",
  "key-down",
  "key-up",
  "mouse-wheel",
  "pointer-down",
  "pointer-enter",
  "pointer-leave",
  "pointer-move",
  "pointer-up",
  "layerview-create",
  "layerview-create-error",
  "layerview-destroy",
  "resize"
];

export function useInitView({
  emit,
  attrs,
  slots,
  Module,
  otherEvents = []
}: SetupContext & { Module: ViewConstructor; otherEvents?: string[] }) {
  const mapRoot = inject<MapProvide>("mapRoot");
  const mapEmitter = inject<MapEmitter>("mapEmitter");
  const containerId = uuid();

  onMounted(() => {
    if (mapRoot?.map) {
      init(mapRoot?.map);
    } else {
      mapEmitter?.on("rootMapInit", (map: Map) => {
        init(map);
      });
    }
  });

  function init(map?: Map) {
    const view = new Module({
      container: containerId,
      map,
      ...attrs
    });
    useEvents({ events: [...commonEvents, ...otherEvents], emit, instance: view });
    useWatch({ attrs, instance: view });
    mapEmitter?.emit("rootViewInit", view);
    emit("init", view, map);
  }

  return () =>
    h(
      "div",
      {
        id: containerId,
        style: "width:100%;height:100%"
      },
      slots.default?.()
    );
}
