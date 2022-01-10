import { defineComponent, onBeforeMount, onUnmounted } from "vue-demi";
import Graphic from "@arcgis/core/Graphic";
import { useRootView, useWatch, useInject } from "../../use";

export const EGraphic = defineComponent({
  name: "EGraphic",
  setup(props, { attrs, emit }) {
    const { graphicsLayer } = useInject();

    onBeforeMount(async () => {
      onUnmounted(() => (graphic && graphicsLayer?.value?.remove(graphic)) || view?.graphics.remove(graphic));

      const view = await useRootView();
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
  }
});

export type EGraphic = InstanceType<typeof EGraphic>;
