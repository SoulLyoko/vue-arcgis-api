<script>
import SceneView from "@arcgis/core/views/SceneView";
import viewMixin from "../../mixins/views";

export default {
  name: "e-scene-view",
  mixins: [viewMixin],
  data() {
    return {
      module: SceneView
    };
  }
};
</script>
