import { defineComponent, onMounted, onUnmounted } from "vue-demi";
import Graphic from "@arcgis/core/Graphic";
import { injectRoot, useWatch, injectGraphicsLayer } from "../../use";

export const EGraphic = defineComponent((props, { attrs, emit }) => {
  const { viewResolver } = injectRoot();
  const graphicsLayer = injectGraphicsLayer();

  onMounted(async () => {
    onUnmounted(() => (graphic && graphicsLayer?.value?.remove(graphic)) || view?.graphics.remove(graphic));

    const view = await viewResolver();
    const graphic = new Graphic({ ...attrs });
    emit("init", graphic);
    if (graphicsLayer?.value) {
      graphicsLayer.value.add(graphic);
    } else {
      view.graphics.add(graphic);
    }
    useWatch({ attrs: attrs, instance: graphic });
  });

  return () => {};
});

export type EGraphic = InstanceType<typeof EGraphic>;
