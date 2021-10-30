<script lang="ts">
import { defineComponent } from "vue-demi";
import TileLayer from "@arcgis/core/layers/TileLayer";
import { useInitLayer } from "../../use";

export default defineComponent({
  name: "ETileLayer",
  setup(props, context) {
    return useInitLayer({ ...context, Module: TileLayer });
  }
});
</script>
