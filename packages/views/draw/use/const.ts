import { PropType } from "vue-demi";
import Symbol from "@arcgis/core/symbols/Symbol";

export const PROPS = {
  //point symbol
  point: {
    type: Object as PropType<Symbol>,
    default: () => ({
      type: "simple-marker",
      color: [144, 129, 188],
      size: "8px",
      outline: { color: [45, 38, 112], width: 1 }
    })
  },
  //multipoint symbol
  multipoint: {
    type: Object as PropType<Symbol>,
    default: () => ({
      type: "simple-marker",
      color: [144, 129, 188],
      size: "8px",
      outline: { color: [45, 38, 112], width: 1 }
    })
  },
  //polyline symbol
  polyline: {
    type: Object as PropType<Symbol>,
    default: () => ({
      type: "simple-line",
      color: [144, 129, 188],
      width: "2px"
    })
  },
  //polygon symbol
  polygon: {
    type: Object as PropType<Symbol>,
    default: () => ({
      type: "simple-fill",
      color: [144, 129, 188, 0.8],
      outline: { color: [45, 38, 112], width: 1 }
    })
  },
  //circle symbol
  circle: {
    type: Object as PropType<Symbol>,
    default: () => ({
      type: "simple-fill",
      color: [144, 129, 188, 0.8],
      outline: { color: [45, 38, 112], width: 1 }
    })
  },
  //rectangle symbol
  rectangle: {
    type: Object as PropType<Symbol>,
    default: () => ({
      type: "simple-fill",
      color: [144, 129, 188, 0.8],
      outline: { color: [45, 38, 112], width: 1 }
    })
  }
};
