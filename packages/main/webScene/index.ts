import { defineComponent } from "vue-demi";
import WebScene from "@arcgis/core/WebScene";
import { useInitMap } from "../../use";

export const EWebScene = defineComponent({
  name: "EWebScene",
  setup(props, context) {
    return useInitMap({ ...context, Module: WebScene });
  }
});

export type EWebScene = InstanceType<typeof EWebScene>;
