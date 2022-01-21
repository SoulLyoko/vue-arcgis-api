import { defineComponent } from "vue-demi";
import TileLayer from "@arcgis/core/layers/TileLayer";
import { useInitLayer } from "../../use";

const ownEvents = [] as never[];

export const ETileLayer = defineComponent((props, context) => {
  return useInitLayer({ ...context, Module: TileLayer, ownEvents });
});

export type ETileLayer = InstanceType<typeof ETileLayer>;
