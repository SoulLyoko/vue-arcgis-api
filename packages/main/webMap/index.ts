import { defineComponent } from "vue-demi";
import WebMap from "@arcgis/core/WebMap";
import { useInitMap } from "../../use";

export const EWebMap = defineComponent({
  name: "EWebMap",
  setup(props, context) {
    return useInitMap({ ...context, Module: WebMap });
  }
});

export type EWebMap = InstanceType<typeof EWebMap>;
