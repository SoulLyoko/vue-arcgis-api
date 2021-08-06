<script>
import TileLayer from "@arcgis/core/layers/TileLayer";
import layerMixin from "../../mixins/layers";

export default {
  name: "e-tile-layer",
  mixins: [layerMixin],
  data() {
    return {
      module: TileLayer
    };
  }
};
</script>
