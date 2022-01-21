import { SetupContext } from "vue-demi";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Draw from "@arcgis/core/views/draw/Draw";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import Multipoint from "@arcgis/core/geometry/Multipoint";
import Polyline from "@arcgis/core/geometry/Polyline";
import Polygon from "@arcgis/core/geometry/Polygon";
import Circle from "@arcgis/core/geometry/Circle";
import { DrawState, Props } from "../types";
import { injectRoot } from "../../../use";

type DrawCreateParameters = Parameters<InstanceType<typeof Draw>["create"]>;
type DrawAction = DrawCreateParameters[0];
type DrawOptions = DrawCreateParameters[1];

export function useCreate({ state, props, emit }: { state: DrawState; props: Props; emit: SetupContext["emit"] }) {
  const root = injectRoot();

  function create(drawAction: DrawAction, drawOptions: DrawOptions) {
    state.graphicsLayer = new GraphicsLayer({ title: drawAction });
    state.graphicsLayers?.push(state.graphicsLayer);
    const action = state?.drawer?.create(drawAction, drawOptions);
    switch (drawAction) {
      case "point":
        action?.on(["cursor-update", "draw-complete"], drawPoint);
        break;
      case "multipoint":
        action?.on(["vertex-add", "vertex-remove", "cursor-update", "redo", "undo", "draw-complete"], drawMultipoint);
        break;
      case "polyline":
        action?.on(["vertex-add", "vertex-remove", "cursor-update", "redo", "undo", "draw-complete"], drawPolyline);
        break;
      case "polygon":
        action?.on(["vertex-add", "vertex-remove", "cursor-update", "redo", "undo", "draw-complete"], drawPolygon);
        break;
      case "circle":
        action?.on(["vertex-add", "cursor-update", "draw-complete"], drawCircle);
        break;
      case "rectangle":
        action?.on(["vertex-add", "cursor-update", "draw-complete"], drawRectangle);
        // case "ellipse":
        break;
      default:
        break;
    }
    return action;
  }

  function drawPoint(event: any) {
    remove();
    const [x, y] = event.coordinates;
    const graphic = new Graphic({
      geometry: new Point({
        x,
        y,
        spatialReference: root.view?.spatialReference
      }),
      symbol: props.point
    });
    add(graphic);
    emit(event.type, { ...event, actionType: "point", graphic });
  }

  function drawMultipoint(event: any) {
    remove();
    const graphic = new Graphic({
      geometry: new Multipoint({
        points: event.vertices,
        spatialReference: root.view?.spatialReference
      }),
      symbol: props.multipoint
    });
    add(graphic);
    emit(event.type, { ...event, actionType: "multipoint", graphic });
  }

  function drawPolyline(event: any) {
    remove();
    const graphic = new Graphic({
      geometry: new Polyline({
        paths: event.vertices,
        spatialReference: root.view?.spatialReference
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
        spatialReference: root.view?.spatialReference
      }),
      symbol: props.polygon
    });
    add(graphic);
    emit(event.type, { ...event, actionType: "polygon", graphic });
  }

  function drawCircle(event: any) {
    if (event.vertices.length < 2) return;
    remove();
    const center = new Point({
      x: event.vertices[0][0],
      y: event.vertices[0][1],
      spatialReference: root.view?.spatialReference
    });
    const sider = new Point({
      x: event.vertices[1][0],
      y: event.vertices[1][1],
      spatialReference: root.view?.spatialReference
    });
    const radius = center.distance(sider);
    const graphic = new Graphic({
      geometry: new Circle({
        center,
        radius,
        spatialReference: root.view?.spatialReference
      }),
      symbol: props.polygon
    });
    add(graphic);
    emit(event.type, { ...event, actionType: "circle", graphic });
  }

  function drawRectangle(event: any) {
    if (event.vertices.length < 2) return;
    remove();
    const { vertices } = event;
    const rings = [vertices[0], [vertices[0][0], vertices[1][1]], vertices[1], [vertices[1][0], vertices[0][1]]];
    const graphic = new Graphic({
      geometry: new Polygon({
        rings,
        spatialReference: root.view?.spatialReference
      }),
      symbol: props.polygon
    });
    add(graphic);
    emit(event.type, { ...event, actionType: "rectangle", graphic });
  }

  // 添加图形
  function add(graphic: Graphic) {
    state.graphicsLayer?.add(graphic);
    state.graphicsLayer && root.map?.add(state.graphicsLayer);
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
