import { defineComponent } from "vue-demi";
import TileLayer from "@arcgis/core/layers/TileLayer";
import { useInitLayer } from "../../use";

export const ETileLayer = defineComponent({
  name: "ETileLayer",
  setup(props, context) {
    useInitLayer({ ...context, Module: TileLayer });
    return () => {};
  }
});

export type ETileLayer = InstanceType<typeof ETileLayer>;
