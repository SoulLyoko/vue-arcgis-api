import { defineComponent } from "vue-demi";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { useInitLayer } from "../../use";

export const EFeatureLayer = defineComponent({
  name: "EFeatureLayer",
  setup(props, context) {
    useInitLayer({ ...context, Module: FeatureLayer, otherEvents: ["edits"] });
    return () => {};
  }
});

export type EFeatureLayer = InstanceType<typeof EFeatureLayer>;
