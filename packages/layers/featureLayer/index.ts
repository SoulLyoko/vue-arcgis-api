import { defineComponent } from "vue-demi";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { useInitLayer } from "../../use";

export const EFeatureLayer = defineComponent((props, context) => {
  return useInitLayer({ ...context, Module: FeatureLayer, otherEvents: ["edits", "refresh"] });
});

export type EFeatureLayer = InstanceType<typeof EFeatureLayer>;
