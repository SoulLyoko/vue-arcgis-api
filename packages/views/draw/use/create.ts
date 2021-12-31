import { SetupContext } from "vue-demi";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Draw from "@arcgis/core/views/draw/Draw";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import Polyline from "@arcgis/core/geometry/Polyline";
import Polygon from "@arcgis/core/geometry/Polygon";
import { DrawState, Props } from "../types";
import { useInject } from "../../../use";

type DrawCreateParameters = Parameters<InstanceType<typeof Draw>["create"]>;
type DrawAction = DrawCreateParameters[0];
type DrawOptions = DrawCreateParameters[1];

export function useCreate({ state, props, emit }: { state: DrawState; props: Props; emit: SetupContext["emit"] }) {
  const { rootMap, rootView } = useInject();
  const map = rootMap?.value;
  const view = rootView?.value;

  function create(drawAction: DrawAction, drawOptions: DrawOptions) {
    state.graphicsLayer = new GraphicsLayer({ title: drawAction });
    state.graphicsLayers?.push(state.graphicsLayer);
    const action = state?.drawer?.create(drawAction, drawOptions);
    switch (drawAction) {
      case "point":
        action?.on(["cursor-update", "draw-complete"], drawPoint);
        break;
      case "polyline":
        action?.on(["vertex-add", "vertex-remove", "cursor-update", "redo", "undo", "draw-complete"], drawPolyline);
        break;
      case "polygon":
        action?.on(["vertex-add", "vertex-remove", "cursor-update", "redo", "undo", "draw-complete"], drawPolygon);
        break;
      default:
        break;
    }
  }

  function drawPoint(event: any) {
    remove();
    const [x, y] = event.coordinates;
    const graphic = new Graphic({
      geometry: new Point({
        x,
        y,
        spatialReference: view?.spatialReference
      }),
      symbol: props.point
    });
    add(graphic);
    emit(event.type, { ...event, actionType: "point", graphic });
  }
  function drawPolyline(event: any) {
    remove();
    const graphic = new Graphic({
      geometry: new Polyline({
        paths: event.vertices,
        spatialReference: view?.spatialReference
      }),
      symbol: props.polyline
    });
    add(graphic);
    emit(event.type, { ...event, actionType: "polyline", graphic });
  }
  function drawPolygon(event: any) {
    remove();
    const graphic = new Graphic({
      geometry: new Polygon({
        rings: event.vertices,
        spatialReference: view?.spatialReference
      }),
      symbol: props.polygon
    });
    add(graphic);
    emit(event.type, { ...event, actionType: "polygon", graphic });
  }

  function add(graphic: Graphic) {
    state.graphicsLayer?.add(graphic);
    map?.add(state.graphicsLayer as GraphicsLayer);
  }
  // 清除当前图层的图形
  function remove() {
    state.graphicsLayer?.removeAll();
  }
  // 清除所有图层的图形
  function clear(type?: DrawAction) {
    state.graphicsLayers?.forEach(layer => {
      if (type) {
        layer.title === type && layer.removeAll();
      } else {
        layer.removeAll();
      }
    });
  }

  return { create, clear };
}
