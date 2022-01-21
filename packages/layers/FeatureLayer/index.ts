import { defineComponent } from "vue-demi";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { useInitLayer } from "../../use";

const ownEvents = ["edits", "refresh"];

export const EFeatureLayer = defineComponent((props, context) => {
  return useInitLayer({ ...context, Module: FeatureLayer, ownEvents });
});

export type EFeatureLayer = InstanceType<typeof EFeatureLayer>;
