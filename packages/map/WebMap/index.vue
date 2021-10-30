<script lang="ts">
import { defineComponent } from "vue-demi";
import WebMap from "@arcgis/core/WebMap";
import { useInitMap } from "../../use";

export default defineComponent({
  name: "EWebMap",
  setup(props, context) {
    return useInitMap({ ...context, Module: WebMap });
  }
});
</script>
