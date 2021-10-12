<script>
import WebMap from "@arcgis/core/WebMap";
import mapMixin from "../../mixins/map";

export default {
  name: "e-web-map",
  mixins: [mapMixin],
  data() {
    return {
      module: WebMap
    };
  }
};
</script>
