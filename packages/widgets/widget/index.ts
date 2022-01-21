import { defineComponent, onMounted, onUnmounted, PropType, watch } from "vue-demi";
import widgetsModules from "./modules";
import { h } from "../../utils";
import { useWatch, injectRoot } from "../../use";
import { ViewInstance } from "../../types";

export const EWidget = defineComponent({
  name: "EWidget",
  props: {
    module: { type: String as PropType<keyof typeof widgetsModules> },
    position: { type: [String, Object] as PropType<Required<__esri.UIAddPosition>["position"] | __esri.UIAddPosition> }
  },
  setup(props, { attrs, slots }) {
    const { viewResolver } = injectRoot();

    onMounted(async () => {
      onUnmounted(() => view?.ui.remove([widget]));

      const view = await viewResolver();
      const widget = init(view);
      watch(
        () => props.position,
        val => view.ui.move([widget], val)
      );
    });

    function init(view: ViewInstance) {
      if (slots.default) {
        return initCustom(view);
      } else if (props.module) {
        return initModule(view);
      }
    }

    function initModule(view: ViewInstance) {
      if (!props.module) return;
      const Module = widgetsModules[props.module];
      const widget = new Module({ view, ...attrs } as any);
      view.ui.add(widget, props.position);
      useWatch({ attrs, instance: widget });
      return widget;
    }

    let widgetDom = h("div");
    function initCustom(view: ViewInstance) {
      view.ui.add(widgetDom.el || widgetDom.elm, props.position);
      return widgetDom.el || widgetDom.elm;
    }

    return () => {
      if (slots.default) {
        widgetDom = h(
          "div",
          {
            class: "e-widget-custom",
            style: "box-shadow:none"
          },
          slots.default?.()
        );
        return widgetDom;
      } else {
        return;
      }
    };
  }
});
