<script>
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import layerMixin from "../../mixins/layers";

export default {
  name: "e-map-image-layer",
  mixins: [layerMixin],
  data() {
    return {
      module: MapImageLayer
    };
  }
};
</script>

<style lang="" scoped></style>
