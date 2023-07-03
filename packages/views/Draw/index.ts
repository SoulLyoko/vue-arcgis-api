import { defineComponent, onMounted, shallowReactive, getCurrentInstance, isVue2 } from "vue-demi";
import Draw from "@arcgis/core/views/draw/Draw";
import { PROPS } from "./use/const";
import { useCreate } from "./use/create";
import { injectRoot } from "../../use";
import { DrawState } from "./types";

export const EDraw = defineComponent({
  name: "EDraw",
  props: PROPS,
  setup(props, { emit, expose, attrs }) {
    const { viewResolver } = injectRoot();

    const state = shallowReactive<DrawState>({
      drawer: null,
      graphicsLayer: null,
      graphicsLayers: [],
      graphics: []
    });

    onMounted(async () => {
      const view = await viewResolver();
      state.drawer = new Draw({ view, ...attrs });
      emit("init", state.drawer);
    });

    const { create, clear } = useCreate({ state, props, emit });
    expose?.({ create, clear });

    if (isVue2) {
      const vm = getCurrentInstance()?.proxy as any;
      vm.create = create;
      vm.clear = clear;
    }

    return () => {};
  }
});

export type EDraw = InstanceType<typeof EDraw>;
