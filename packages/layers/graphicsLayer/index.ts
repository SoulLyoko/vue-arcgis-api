import { defineComponent, provide } from "vue-demi";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { useInitLayer } from "../../use";

export const EGraphicsLayer = defineComponent({
  name: "EGraphicsLayer",
  setup(props, context) {
    const { instance } = useInitLayer({ ...context, Module: GraphicsLayer });
    provide("graphicsLayer", instance);

    return () => context.slots.default?.();
  }
});

export type EGraphicsLayer = InstanceType<typeof EGraphicsLayer>;
