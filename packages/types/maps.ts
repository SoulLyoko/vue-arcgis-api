import Map from "@arcgis/core/Map";
import WebMap from "@arcgis/core/WebMap";
import WebScene from "@arcgis/core/WebScene";

export type MapInstance = Map | WebMap | WebScene;
export type MapConstructor = typeof Map | typeof WebMap | typeof WebScene;
