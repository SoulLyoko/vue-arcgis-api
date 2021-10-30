<script lang="ts">
import { defineComponent, h, inject, onMounted, onUnmounted } from "vue-demi";
import View from "@arcgis/core/views/View";
import { MapEmitter, MapProvide } from "../../types";
import { useWatch } from "../../use";
import widgetsModule from "./modules";

export default defineComponent({
  name: "EWidget",
  props: {
    module: { type: String },
    position: { type: String, default: "top-left" }
  },
  setup(props, { attrs, slots }) {
    const mapRoot = inject<MapProvide>("mapRoot");
    const mapEmitter = inject<MapEmitter>("mapEmitter");
    let widget: any = h(
      "div",
      {
        class: "e-widget-custom"
      },
      [slots.default?.()]
    );

    onMounted(() => {
      if (mapRoot?.view) {
        init(mapRoot?.view);
      } else {
        mapEmitter?.on("rootViewInit", (view: View) => {
          init(view);
        });
      }
    });

    onUnmounted(() => {
      mapRoot?.view?.ui.remove(widget);
    });

    function init(view: View) {
      if (slots.default) {
        initCustom(view);
      } else if (props.module) {
        initModule(view);
      }
    }

    async function initModule(view: View) {
      // @ts-ignore
      const Module = widgetsModule[props.module];
      widget = new Module({ view, ...attrs });
      view.ui.add(widget, props.position);
      useWatch({ attrs, instance: widget });
    }

    function initCustom(view: View) {
      // @ts-ignore: VNode.elm in Vue2
      view.ui.add(widget.el || widget.elm, props.position);
    }

    return () => {
      if (slots.default) {
        return widget;
      } else {
        return;
      }
    };
  }
});
</script>
