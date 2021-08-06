<script>
import TileLayer from "@arcgis/core/layers/TileLayer";

export default {
  name: "e-tile-layer",
  render() {
    return "";
  },
  data() {
    return {};
  },
  created() {
    this.$once("mapInit", this.init);
  },
  methods: {
    init(map) {
      const layer = new TileLayer(this.$attrs);
      map.add(layer);
      const events = ["layerview-create", "layerview-create-error", "layerview-destroy"];
      events.forEach(event => {
        layer.on(event, e => {
          this.$emit(event, e);
        });
      });
    }
  }
};
</script>

<style lang="" scoped></style>
