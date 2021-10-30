<script lang="ts">
import { defineComponent } from "vue-demi";
import MapView from "@arcgis/core/views/MapView";
import { useInitView } from "../../use";

export default defineComponent({
  name: "EMapView",
  setup(props, context) {
    return useInitView({ ...context, Module: MapView });
  }
});
</script>
