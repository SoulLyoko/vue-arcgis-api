import { defineComponent, onBeforeMount, onUnmounted } from "vue-demi";
import { useEvents, useWatch, injectRoot } from "../../use";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { useInjectState } from "../../layers/GraphicsLayer/state";

const events = ["create", "delete", "redo", "undo", "update"];

export const ESketchViewModel = defineComponent((props, { attrs, emit, slots }) => {
  const { mapResolver, viewResolver } = injectRoot();
  const layerState = useInjectState();

  onBeforeMount(async () => {
    onUnmounted(() => layerState.layer && map?.remove(layerState.layer));

    const map = await mapResolver();
    const view = await viewResolver();
    layerState.layer = new GraphicsLayer();
    layerState.emitter.emit("layerInit", layerState.layer);
    const widget = new SketchViewModel({ view, layer: layerState.layer, ...attrs } as __esri.SketchViewModelProperties);
    emit("init", widget, layerState.layer);
    map?.add(layerState.layer);
    useEvents({ events, emit, instance: widget });
    useWatch({ attrs, instance: widget });
  });

  return () => slots.default?.();
});

export type ESketchViewModel = InstanceType<typeof ESketchViewModel>;
