<script lang="ts">
import { defineComponent } from "vue-demi";
import SceneView from "@arcgis/core/views/SceneView";
import { useInitView } from "../../use";

export default defineComponent({
  name: "ESceneView",
  setup(props, context) {
    return useInitView({ ...context, Module: SceneView });
  }
});
</script>
