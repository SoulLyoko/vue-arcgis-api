import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";

export type LayerInstance = FeatureLayer | MapImageLayer | TileLayer;
export type LayerConstructor = typeof FeatureLayer | typeof MapImageLayer | typeof TileLayer;
