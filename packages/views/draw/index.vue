<script lang="ts">
import { defineComponent, onMounted, shallowReactive } from "vue-demi";
import View from "@arcgis/core/views/View";
import Draw from "@arcgis/core/views/draw/Draw";
import { PROPS } from "./use/const";
import { useInject } from "../../use";
import { DrawState } from "./types";
import { useCreate } from "./use/create";

export default defineComponent({
  name: "EDraw",
  inject: ["mapRoot"],
  props: PROPS,
  setup(props, { emit, expose, attrs }) {
    const state = shallowReactive<DrawState>({
      drawer: undefined,
      graphicsLayer: undefined,
      graphicsLayers: [],
      graphics: []
    });

    const { mapRoot, mapEmitter } = useInject();

    onMounted(() => {
      if (mapRoot?.view) {
        init(mapRoot?.view);
      } else {
        mapEmitter?.on("rootViewInit", (view: View) => {
          init(view);
        });
      }
    });

    function init(view: View) {
      state.drawer = new Draw({ view, ...attrs });
      emit("init", state.drawer);
    }

    const { create, clear } = useCreate({ state, props, emit });

    expose?.({ create, clear });

    return () => {};
  }
});
</script>
