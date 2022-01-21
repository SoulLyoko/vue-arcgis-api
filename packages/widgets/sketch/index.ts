import { defineComponent, onMounted, onUnmounted } from "vue-demi";
import { useEvents, useWatch, injectRoot } from "../../use";
import Sketch from "@arcgis/core/widgets/Sketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { useWatchPosition } from "../../use";

const events = ["create", "delete", "redo", "undo", "update"];

export const ESketch = defineComponent((props, { attrs, emit }) => {
  const { mapResolver, viewResolver } = injectRoot();

  onMounted(async () => {
    onUnmounted(() => {
      view?.ui.remove(widget);
      map?.remove(layer);
    });

    const map = await mapResolver();
    const view = await viewResolver();
    const layer = new GraphicsLayer();
    const widget = new Sketch({ view, layer, ...attrs } as __esri.SketchProperties);
    emit("init", widget, layer);
    map?.add(layer);
    view?.ui.add(widget, attrs.position as __esri.UIAddPosition);
    useEvents({ events, emit, instance: widget });
    useWatch({ attrs, instance: widget });
    useWatchPosition({ attrs, instance: widget, view });
  });

  return () => {};
});

export type ESketch = InstanceType<typeof ESketch>;
