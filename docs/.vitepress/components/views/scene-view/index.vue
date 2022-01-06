// #region snippet
<template>
  <container>
    <EMap :basemap="state.basemap">
      <ESceneView></ESceneView>
    </EMap>
  </container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  basemap: "hybrid"
});
</script>
// #endregion snippet

<script lang="ts">
import { EMap, ESceneView } from "../../dynamicComponents";
export default {
  name: "demo-scene-view",
  components: { EMap, ESceneView }
};
</script>
