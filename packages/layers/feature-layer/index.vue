<script>
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import layerMixin from "../../mixins/layers";

export default {
  name: "e-feature-layer",
  mixins: [layerMixin],
  data() {
    return {
      module: FeatureLayer,
      otherEvents: ["edits"]
    };
  }
};
</script>

<style lang="" scoped></style>
