<script lang="ts">
import { defineComponent } from "vue-demi";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { useInitLayer } from "../../use";

export default defineComponent({
  name: "EFeatureLayer",
  setup(props, context) {
    return useInitLayer({ ...context, Module: FeatureLayer, otherEvents: ["edits"] });
  }
});
</script>
