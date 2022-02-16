import { defineComponent } from "vue-demi";
import Editor from "@arcgis/core/widgets/Editor";
import { useInitWidget } from "../../use";

const events = [] as never[];

export const EEditor = defineComponent({
  setup(props, context) {
    return useInitWidget({ ...context, Module: Editor, events });
  }
});

export type EEditor = InstanceType<typeof EEditor>;
