import { defineComponent } from "vue-demi";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import { useInitLayer } from "../../use";

const ownEvents = [] as never[];

export const EMapImageLayer = defineComponent((props, context) => {
  return useInitLayer({ ...context, Module: MapImageLayer, ownEvents });
});

export type EMapImageLayer = InstanceType<typeof EMapImageLayer>;
