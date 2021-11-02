export const PROPS = {
  //point symbol
  point: {
    type: Object,
    default: () => ({
      type: "simple-marker",
      color: [144, 129, 188],
      size: "8px",
      outline: { color: [45, 38, 112], width: 1 }
    })
  },
  //polyline symbol
  polyline: {
    type: Object,
    default: () => ({
      type: "simple-line",
      color: [144, 129, 188],
      width: "2px"
    })
  },
  //polygon symbol
  polygon: {
    type: Object,
    default: () => ({
      type: "simple-fill",
      color: [144, 129, 188, 0.8],
      outline: { color: [45, 38, 112], width: 1 }
    })
  }
};
