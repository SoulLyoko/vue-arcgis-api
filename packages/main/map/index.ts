import { defineComponent } from "vue-demi";
import Map from "@arcgis/core/Map";
import { useInitMap } from "../../use";

export const EMap = defineComponent((props, context) => {
  return useInitMap({ ...context, Module: Map });
});

export type EMap = InstanceType<typeof EMap>;
