<script lang="ts">
import { defineComponent } from "vue-demi";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import { useInitLayer } from "../../use";

export default defineComponent({
  name: "EMapImageLayer",
  setup(props, context) {
    return useInitLayer({ ...context, Module: MapImageLayer });
  }
});
</script>
