import { defineComponent } from "vue-demi";
import MapView from "@arcgis/core/views/MapView";
import { useInitView } from "../../use";

export const EMapView = defineComponent((props, context) => {
  return useInitView({ ...context, Module: MapView });
});

export type EMapView = InstanceType<typeof EMapView>;
