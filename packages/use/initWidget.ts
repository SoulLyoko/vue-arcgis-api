import { onMounted, onUnmounted, SetupContext, watch } from "vue-demi";
import { useEvents, useWatch, injectRoot } from "./";
import { WidgetConstructor, WidgetInstance, ViewInstance } from "../types";

export function useInitWidget({
  emit,
  attrs,
  Module,
  events = []
}: SetupContext & { Module: WidgetConstructor; events?: string[] }) {
  const { viewResolver } = injectRoot();

  onMounted(async () => {
    onUnmounted(() => view?.ui.remove(widget));

    const view = await viewResolver();
    const widget = new Module({ view, ...attrs } as __esri.WidgetProperties);
    emit("init", widget);
    view.ui.add(widget, attrs.position as __esri.UIAddPosition);
    useEvents({ events, emit, instance: widget });
    useWatch({ attrs, instance: widget });
    useWatchPosition({ attrs, instance: widget, view });
  });

  return () => {};
}

export async function useWatchPosition({
  attrs,
  instance,
  view
}: {
  attrs: SetupContext["attrs"];
  instance: WidgetInstance;
  view: ViewInstance;
}) {
  watch(
    () => attrs.position as __esri.UIAddPosition,
    val => view.ui.move(instance, val)
  );
}
