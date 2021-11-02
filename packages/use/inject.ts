import { inject } from "vue-demi";
import { MapEmitter, MapProvide } from "../types";

export function useInject() {
  const mapRoot = inject<MapProvide>("mapRoot");
  const mapEmitter = inject<MapEmitter>("mapEmitter");

  return { mapRoot, mapEmitter };
}
