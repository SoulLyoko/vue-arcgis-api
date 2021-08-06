<script>
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

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
      const layer = new FeatureLayer(this.$attrs);
      map.add(layer);
      const events = ["edits", "layerview-create", "layerview-create-error", "layerview-destroy"];
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
