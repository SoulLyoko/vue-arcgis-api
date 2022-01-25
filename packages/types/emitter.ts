import { Emitter } from "mitt";
import { LayerInstance, MapInstance, ViewInstance } from ".";

export type MapEmitEvents = {
  rootMapInit: MapInstance;
  rootViewInit: ViewInstance;
  layerInit: LayerInstance;
};
export type MapEmitter = Emitter<MapEmitEvents>;
