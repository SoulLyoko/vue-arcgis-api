import { defineComponent, onMounted, shallowReactive } from "vue-demi";
import Draw from "@arcgis/core/views/draw/Draw";
import { PROPS } from "./use/const";
import { useCreate } from "./use/create";
import { useRootView } from "../../use";
import { DrawState } from "./types";

export const EDraw = defineComponent({
  name: "EDraw",
  props: PROPS,
  setup(props, { emit, expose, attrs }) {
    const state = shallowReactive<DrawState>({
      drawer: undefined,
      graphicsLayer: undefined,
      graphicsLayers: [],
      graphics: []
    });

    onMounted(async () => {
      const view = await useRootView();
      state.drawer = new Draw({ view, ...attrs });
      emit("init", state.drawer);
    });

    const { create, clear } = useCreate({ state, props, emit });
    expose?.({ create, clear });

    return () => {};
  }
});

export type EDraw = InstanceType<typeof EDraw>;
