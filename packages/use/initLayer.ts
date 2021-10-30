import { onMounted, onUnmounted, inject, SetupContext } from "vue-demi";
import Map from "@arcgis/core/Map";
import { useEvents, useWatch } from "./";
import { MapEmitter, MapProvide, LayerConstructor } from "../types";

const commonEvents = ["layerview-create", "layerview-create-error", "layerview-destroy", "refresh"];

export function useInitLayer({
  emit,
  attrs,
  Module,
  otherEvents = []
}: SetupContext & { Module: LayerConstructor; otherEvents?: string[] }) {
  const mapRoot = inject<MapProvide>("mapRoot");
  const mapEmitter = inject<MapEmitter>("mapEmitter");

  onMounted(() => {
    if (mapRoot?.map) {
      init(mapRoot?.map);
    } else {
      mapEmitter?.on("rootMapInit", (map: Map) => {
        init(map);
      });
    }
  });

  function init(map: Map) {
    const layer = new Module(attrs);
    map.add(layer);
    useEvents({ events: [...commonEvents, ...otherEvents], emit, instance: layer });
    useWatch({ attrs, instance: layer });
    emit("init", layer);
    onUnmounted(() => map?.remove(layer));
  }

  return () => {};
}
