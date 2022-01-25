import { defineComponent, onMounted, onUnmounted, PropType, watch } from "vue-demi";
import { h } from "../../utils";
import { injectRoot } from "../../use";

export const EWidget = defineComponent({
  name: "EWidget",
  props: {
    position: { type: [String, Object] as PropType<Required<__esri.UIAddPosition>["position"] | __esri.UIAddPosition> }
  },
  setup(props, { slots }) {
    const { viewResolver } = injectRoot();
    let widgetDom = h("div");

    onMounted(async () => {
      onUnmounted(() => view?.ui.remove(widget));

      const view = await viewResolver();
      const widget = widgetDom.el || widgetDom.elm;
      view.ui.add(widget, props.position);
      watch(
        () => props.position,
        val => view.ui.move(widget, val)
      );
    });

    return () => {
      widgetDom = h(
        "div",
        {
          class: "e-widget-custom",
          style: "box-shadow:none"
        },
        slots.default?.()
      );
      return widgetDom;
    };
  }
});
