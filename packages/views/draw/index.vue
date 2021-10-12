<script>
import Draw from "@arcgis/core/views/draw/Draw";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";

export default {
  name: "e-draw",
  render() {},
  inject: ["mapRoot"],
  props: {
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
  },
  data() {
    return {
      instance: null
    };
  },
  created() {
    this.mapRoot.$on("viewInit", () => {
      this.init();
    });
  },
  methods: {
    init() {
      const view = this.mapRoot.view;
      this.instance = new Draw({ view, ...this.$attrs });
      this.graphicsLayer = new GraphicsLayer({ spatialReference: this.view.spatialReference });
      this.$emit("init", this.instance);
    },
    create(drawAction, drawOptions) {
      this.removeAll();
      const action = this.instance.create(drawAction, drawOptions);
      switch (drawAction) {
        case "point":
          action.on(["cursor-update", "draw-complete"], this.drawPoint);
          break;
        case "polyline":
          action.on(
            ["vertex-add", "vertex-remove", "cursor-update", "redo", "undo", "draw-complete"],
            this.drawPolyline
          );
          break;
        case "polygon":
          action.on(
            ["vertex-add", "vertex-remove", "cursor-update", "redo", "undo", "draw-complete"],
            this.drawPolygon
          );
          break;
        default:
          break;
      }
    },
    drawPoint(event) {
      this.removeAll();
      const [x, y] = event.coordinates;
      const graphic = new Graphic({
        geometry: { type: "point", x, y, spatialReference: this.view.spatialReference },
        symbol: this.point
      });
      this.add(graphic);
      this.$emit(event.type, { ...event, actionType: "point", graphic });
    },
    drawPolyline(event) {
      this.removeAll();
      const graphic = new Graphic({
        geometry: { type: "polyline", paths: event.vertices, spatialReference: this.view.spatialReference },
        symbol: this.polyline
      });
      this.add(graphic);
      this.$emit(event.type, { ...event, actionType: "polyline", graphic });
    },
    drawPolygon(event) {
      this.removeAll();
      const graphic = new Graphic({
        geometry: { type: "polygon", rings: event.vertices, spatialReference: this.view.spatialReference },
        symbol: this.polygon
      });
      this.add(graphic);
      this.$emit(event.type, { ...event, actionType: "polygon", graphic });
    },
    removeAll() {
      this.graphicsLayer.removeAll();
    },
    add(graphic) {
      this.graphicsLayer.add(graphic);
      this.mapRoot.map.add(this.graphicsLayer);
    }
  }
};
</script>
