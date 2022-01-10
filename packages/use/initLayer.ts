import { onBeforeMount, onUnmounted, SetupContext, shallowRef, watch } from "vue-demi";
import { useEvents, useWatch, useRootMap } from "./";
import { LayerInstance, LayerConstructor } from "../types";

const commonEvents = ["layerview-create", "layerview-create-error", "layerview-destroy", "refresh"];

export function useInitLayer({
  emit,
  attrs,
  Module,
  otherEvents = []
}: SetupContext & { Module: LayerConstructor; otherEvents?: string[] }) {
  const instance = shallowRef<LayerInstance>();

  onBeforeMount(async () => {
    onUnmounted(() => layer && map?.remove(layer));

    const map = await useRootMap();
    const layer = new Module(attrs);
    instance.value = layer;
    emit("init", layer);
    map.add(layer, attrs.index as number);
    useEvents({ events: [...commonEvents, ...otherEvents], emit, instance: layer });
    useWatch({ attrs, instance: layer });
    watch(
      () => attrs.index as number,
      val => map.reorder(layer, val)
    );
  });

  return { instance };
}
