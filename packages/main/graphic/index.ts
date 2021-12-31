import { defineComponent, onMounted, onUnmounted } from "vue-demi";
import Graphic from "@arcgis/core/Graphic";
import { useRootView, useWatch } from "../../use";

export const EGraphic = defineComponent({
  name: "EGraphic",
  setup(props, { attrs, emit }) {
    onMounted(async () => {
      onUnmounted(() => graphic && view?.graphics.remove(graphic));

      const view = await useRootView();
      const graphic = new Graphic({ ...attrs });
      emit("init", graphic);
      view.graphics.add(graphic);
      useWatch({ attrs: attrs, instance: graphic });
    });

    return () => {};
  }
});

export type EGraphic = InstanceType<typeof EGraphic>;
