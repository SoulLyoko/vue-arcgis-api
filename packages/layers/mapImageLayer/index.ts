import { defineComponent } from "vue-demi";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import { useInitLayer } from "../../use";

export const EMapImageLayer = defineComponent({
  name: "EMapImageLayer",
  setup(props, context) {
    return useInitLayer({ ...context, Module: MapImageLayer });
  }
});

export type EMapImageLayer = InstanceType<typeof EMapImageLayer>;
