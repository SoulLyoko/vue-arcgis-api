import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";

export type ViewInstance = MapView | SceneView;
export type ViewConstructor = typeof MapView | typeof SceneView;
