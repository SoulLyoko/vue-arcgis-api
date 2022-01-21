import { defineComponent } from "vue-demi";
import TileLayer from "@arcgis/core/layers/TileLayer";
import { useInitLayer } from "../../use";

export const ETileLayer = defineComponent((props, context) => {
  return useInitLayer({ ...context, Module: TileLayer });
});

export type ETileLayer = InstanceType<typeof ETileLayer>;
