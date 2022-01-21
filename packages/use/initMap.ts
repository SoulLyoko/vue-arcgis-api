import { onMounted, shallowReactive, SetupContext } from "vue-demi";
import mitt from "mitt";
import { h } from "../utils";
import { MapEmitEvents, MapConstructor, MapInstance, ViewInstance } from "../types";
import { RootInject, provideRoot } from ".";

export function useInitMap({
  emit,
  attrs,
  slots,
  Module
}: SetupContext<["init", "viewInit"]> & { Module: MapConstructor }) {
  const emitter = mitt<MapEmitEvents>();

  const root: RootInject = shallowReactive({
    map: undefined,
    view: undefined,
    mapResolver: mapResolver,
    viewResolver: viewResolver,
    emitter
  });

  function mapResolver() {
    return new Promise<MapInstance>(resolve => {
      if (root.map) {
        resolve(root.map);
      } else {
        const resolver = (map: MapInstance) => {
          emitter?.off("rootMapInit", resolver);
          resolve(map);
        };
        emitter.on("rootMapInit", resolver);
      }
    });
  }

  function viewResolver() {
    return new Promise<ViewInstance>(resolve => {
      if (root.view) {
        resolve(root.view);
      } else {
        const resolver = (view: ViewInstance) => {
          emitter?.off("rootViewInit", resolver);
          resolve(view);
        };
        emitter?.on("rootViewInit", resolver);
      }
    });
  }

  provideRoot(root);

  onMounted(() => {
    root.map = new Module(attrs);
    emit("init", root.map);
    emitter.emit("rootMapInit", root.map);
    emitter.on("rootViewInit", (view: ViewInstance) => {
      root.view = view;
      emit("viewInit", root.view, root.map);
    });
  });

  return () =>
    h(
      "div",
      {
        style: "width:100%;height:100%"
      },
      slots.default?.()
    );
}
