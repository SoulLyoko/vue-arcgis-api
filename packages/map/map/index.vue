<script lang="ts">
import { defineComponent } from "vue-demi";
import Map from "@arcgis/core/Map";
import { useInitMap } from "../../use";

export default defineComponent({
  name: "EMap",
  setup(props, context) {
    return useInitMap({ ...context, Module: Map });
  }
});
</script>
