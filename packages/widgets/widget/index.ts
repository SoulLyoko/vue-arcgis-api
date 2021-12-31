import { defineComponent, onMounted, onUnmounted, PropType } from "vue-demi";
import widgetsModules from "./modules";
import { h } from "../../utils";
import { useWatch, useRootView } from "../../use";
import { ViewInstance } from "../../types";

export const EWidget = defineComponent({
  name: "EWidget",
  props: {
    module: { type: String as PropType<keyof typeof widgetsModules> },
    position: { type: [String, Object] as PropType<string | __esri.UIAddPosition> }
  },
  setup(props, { attrs, slots }) {
    const widgetDom = h(
      "div",
      {
        class: "e-widget-custom"
      },
      [slots.default?.()]
    );

    onMounted(async () => {
      onUnmounted(() => view?.ui.remove([widgetDom]));

      const view = await useRootView();
      init(view);
    });

    function init(view: ViewInstance) {
      if (slots.default) {
        initCustom(view);
      } else if (props.module) {
        initModule(view);
      }
    }

    function initModule(view: ViewInstance) {
      if (!props.module) return;
      const Module = widgetsModules[props.module];
      const widget = new Module({ view, ...attrs } as any);
      view.ui.add(widget, props.position);
      useWatch({ attrs, instance: widget });
    }

    function initCustom(view: ViewInstance) {
      view.ui.add(widgetDom.el || widgetDom.elm, props.position);
    }

    return () => {
      if (slots.default) {
        return widgetDom;
      } else {
        return;
      }
    };
  }
});
