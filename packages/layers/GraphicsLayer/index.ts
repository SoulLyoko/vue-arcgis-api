import { defineComponent, shallowRef } from "vue-demi";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { layerEvents, useWatchIndex, provideGraphicsLayer } from "../../use";
import { onBeforeMount, onUnmounted } from "vue-demi";
import { useEvents, useWatch, injectRoot } from "../../use";

export const EGraphicsLayer = defineComponent((props, { attrs, emit, slots }) => {
  const { mapResolver } = injectRoot();
  const layer = shallowRef<GraphicsLayer>();
  provideGraphicsLayer(layer);

  onBeforeMount(async () => {
    onUnmounted(() => layer.value && map?.remove(layer.value));

    const map = await mapResolver();
    layer.value = new GraphicsLayer(attrs as __esri.GraphicProperties);
    emit("init", layer.value);
    map.add(layer.value, attrs.index as number);
    useEvents({ events: layerEvents, emit, instance: layer.value });
    useWatch({ attrs, instance: layer.value });
    useWatchIndex({ attrs, instance: layer.value, map });
  });

  return () => slots.default?.();
});

export type EGraphicsLayer = InstanceType<typeof EGraphicsLayer>;
