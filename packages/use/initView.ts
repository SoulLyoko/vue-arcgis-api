import { onMounted, SetupContext } from "vue-demi";
import { useEvents, useWatch, injectRoot } from "./";
import { uuid, h } from "../utils";
import { ViewConstructor } from "../types";

const commonEvents = [
  "blur",
  "click",
  "double-click",
  "drag",
  "focus",
  "hold",
  "immediate-click",
  "immediate-double-click",
  "key-down",
  "key-up",
  "mouse-wheel",
  "pointer-down",
  "pointer-enter",
  "pointer-leave",
  "pointer-move",
  "pointer-up",
  "layerview-create",
  "layerview-create-error",
  "layerview-destroy",
  "resize"
];

export function useInitView({
  emit,
  attrs,
  slots,
  Module,
  otherEvents = []
}: SetupContext & { Module: ViewConstructor; otherEvents?: string[] }) {
  const { mapResolver, emitter } = injectRoot();
  const containerId = uuid();

  onMounted(async () => {
    const map = await mapResolver();
    const view = new Module({ container: containerId, map, ...attrs });
    emit("init", view, map);
    emitter?.emit("rootViewInit", view);
    useEvents({ events: [...commonEvents, ...otherEvents], emit, instance: view });
    useWatch({ attrs, instance: view });
  });

  return () =>
    h(
      "div",
      {
        attrs: { id: containerId },
        style: "width:100%;height:100%"
      },
      slots.default?.()
    );
}
