import { defineComponent } from "vue-demi";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { layerEvents, useWatchIndex } from "../../use";
import { onBeforeMount, onUnmounted } from "vue-demi";
import { useEvents, useWatch, injectRoot } from "../../use";
import { useInjectState } from "./state";

export const EGraphicsLayer = defineComponent((props, { attrs, emit, slots }) => {
  const { mapResolver } = injectRoot();
  const state = useInjectState();

  onBeforeMount(async () => {
    onUnmounted(() => state.layer && map?.remove(state.layer));

    const map = await mapResolver();
    state.layer = new GraphicsLayer(attrs as __esri.GraphicProperties);
    state.emitter.emit("layerInit", state.layer);
    emit("init", state.layer);
    map.add(state.layer, attrs.index as number);
    useEvents({ events: layerEvents, emit, instance: state.layer });
    useWatch({ attrs, instance: state.layer });
    useWatchIndex({ attrs, instance: state.layer, map });
  });

  return () => slots.default?.();
});

export type EGraphicsLayer = InstanceType<typeof EGraphicsLayer>;
