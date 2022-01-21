import { onBeforeMount, onUnmounted, SetupContext, watch } from "vue-demi";
import { useEvents, useWatch, injectRoot } from "./";
import { LayerInstance, LayerConstructor, MapInstance } from "../types";

export const layerEvents = ["layerview-create", "layerview-create-error", "layerview-destroy"];

export function useInitLayer({
  emit,
  attrs,
  Module,
  otherEvents = []
}: SetupContext & { Module: LayerConstructor; otherEvents?: string[] }) {
  const { mapResolver } = injectRoot();

  onBeforeMount(async () => {
    onUnmounted(() => layer && map?.remove(layer));

    const map = await mapResolver();
    const layer = new Module(attrs);
    emit("init", layer);
    map.add(layer, attrs.index as number);
    useEvents({ events: [...layerEvents, ...otherEvents], emit, instance: layer });
    useWatch({ attrs, instance: layer });
    useWatchIndex({ attrs, instance: layer, map });
  });

  return () => {};
}

export async function useWatchIndex({
  attrs,
  instance,
  map
}: {
  attrs: SetupContext["attrs"];
  instance: LayerInstance;
  map: MapInstance;
}) {
  watch(
    () => attrs.index as number,
    val => map.reorder(instance, val)
  );
}
