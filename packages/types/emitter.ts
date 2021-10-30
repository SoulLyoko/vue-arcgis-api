import { Emitter } from "mitt";
import { MapInstance, ViewInstance } from ".";

export type MapEmitEvents = {
  rootMapInit: MapInstance;
  rootViewInit: ViewInstance;
};
export type MapEmitter = Emitter<MapEmitEvents>;
