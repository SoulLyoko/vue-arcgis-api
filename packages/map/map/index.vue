<script>
import Map from "@arcgis/core/Map";
import mapMixin from "../../mixins/map";

export default {
  name: "e-map",
  mixins: [mapMixin],
  data() {
    return {
      module: Map
    };
  }
};
</script>
