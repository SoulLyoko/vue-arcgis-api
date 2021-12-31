import { onMounted, inject, SetupContext } from "vue-demi";
import { useEvents, useWatch, useRootMap } from "./";
import { uuid, h } from "../utils";
import { MapEmitter, ViewConstructor } from "../types";

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
  const mapEmitter = inject<MapEmitter>("mapEmitter");
  const containerId = uuid();

  onMounted(async () => {
    const map = await useRootMap();
    const view = new Module({
      container: containerId,
      map,
      ...attrs
    });
    useEvents({ events: [...commonEvents, ...otherEvents], emit, instance: view });
    useWatch({ attrs, instance: view });
    mapEmitter?.emit("rootViewInit", view);
    emit("init", view, map);
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
