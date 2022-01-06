// #region snippet
<template>
  <container>
    <EWebScene :portalItem="state.portalItem">
      <ESceneView></ESceneView>
    </EWebScene>
  </container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  portalItem: {
    // autocasts as new PortalItem()
    id: "affa021c51944b5694132b2d61fe1057" // ID of the WebScene on arcgis.com
  }
});
</script>
// #endregion snippet

<script lang="ts">
import { EWebScene, ESceneView } from "../../dynamicComponents";
export default {
  name: "demo-web-scene",
  components: { EWebScene, ESceneView }
};
</script>
